import { ActionReducerMap } from '@ngrx/store';

import * as fromSearchReducer from '../search/store/search.reducers';
import * as fromChannelReducer from '../channels/store/channels.reducer';

export interface AppState{
    search: fromSearchReducer.State,
    channel: fromChannelReducer.State
}

export const rootReducer: ActionReducerMap<AppState> = {
    search: fromSearchReducer.searchReducer,
    channel: fromChannelReducer.channelsReducer
}