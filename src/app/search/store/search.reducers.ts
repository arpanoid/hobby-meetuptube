import { ALL_CHANNELS, ChannelsData } from './../../shared/model/topics';
import { SearchResultModel } from './../../shared/model/search';
import * as fromSearchAction from './search.actions'

export interface State{
    videos: SearchResultModel[]
}

const initialState: State = {
    videos: [], 
}

declare const gapi: any;

export function searchReducer(state = initialState, action: fromSearchAction.SearchActions){
    switch(action.type){
        case fromSearchAction.SEARCH_RESULT_RECEIVED:
            return { ...state, videos: action.payload }
        default:
            return state
    }
}