import { SearchResultModel } from '../../shared/model/search';
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/concat';
import { HttpClient } from '@angular/common/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as fromSearchAction from './search.actions';
import { Observable } from "rxjs/Observable";


@Injectable()
export class SearchEffects {
    @Effect()
    $search_term = this.actions$
        .ofType(fromSearchAction.SEARCH_ITEM)
        .map((action: fromSearchAction.SearchItem) => action.payload)
        .switchMap(({ term, channels }) => {
            const allStreams = channels.map(channel => this.http.get(this.getSearchURL(term, channel.channelId)))
            return Observable.forkJoin(...allStreams);
        })
        .map((resultList: any) => {
            const payload: SearchResultModel[] = resultList
                .reduce((left, right) => left.concat(right.items), [])
                .filter(item => item.id.kind === "youtube#video")
                .map(item => {
                    return {
                        title: item.snippet.title,
                        videoId: item.id.videoId,
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.medium,
                        channelTitle: item.channelTitle
                    }
                })
            return {
                type: fromSearchAction.SEARCH_RESULT_RECEIVED,
                payload
            }
        })

    constructor(private actions$: Actions, private http: HttpClient) { }

    getSearchURL(term: string, channelId: string): string {
        const API_KEY = "AIzaSyAvi8bBM-V9c1V-wA5qaWDo0F6sH4E4yDk";
        const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?q=${term}&key=${API_KEY}&channelId=${channelId}&part=snippet`;
        return SEARCH_URL;
    }
}