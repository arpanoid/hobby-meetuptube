import { SearchResultModel } from './../shared/model/search';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  videoList: SearchResultModel[] 

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.store.select('search')
      .subscribe( (result) => {
        this.videoList = result.videos
      })
  }

}
