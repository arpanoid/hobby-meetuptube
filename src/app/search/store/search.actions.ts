import { SearchResultModel, SearchQueryModel } from './../../shared/model/search';
import { Action } from '@ngrx/store'

export const SEARCH_ITEM = "SEARCH_ITEM";
export const BEGIN_SEARCH_ITEM = "BEGIN_SEARCH_ITEM";
export const SEARCH_RESULT_RECEIVED = "SEARCH_RESULT_RECEIVED";

export class SearchItem implements Action{
    constructor(public payload: SearchQueryModel){}
    readonly type = SEARCH_ITEM;
}

export class SearchResultReceived implements Action{
    constructor(public payload: SearchResultModel[]){}
    readonly type = SEARCH_RESULT_RECEIVED;
}

export class BeginSearchItem implements Action{
    readonly type = BEGIN_SEARCH_ITEM;
    constructor(public payload: string){}
}

export type SearchActions = SearchItem | SearchResultReceived | BeginSearchItem;
