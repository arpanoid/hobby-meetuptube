import { ChannelData } from './../../shared/model/topics';
import * as fromChannelAction from './channels.action'

export interface State{
    filters: ChannelData[]
}

const initialState: State ={
    filters: []
}

export function channelsReducer(state = initialState, action: fromChannelAction.ChannelAction ) {
    switch(action.type){
        case fromChannelAction.ADD_FILTER:{
                const filters = state.filters.filter( data => data.channelId !== action.payload.channelId)
                return {...state, filters: [...filters, action.payload]}
        }
        case fromChannelAction.CLEAR_ALL_FILTERS:
            return {...state, filters: initialState.filters} 
        case fromChannelAction.REMOVE_FILTER:{
            const filters = state.filters.filter( data => data.channelId !== action.payload.channelId)
            return {...state, filters }
        }     
        default:
            return state
    }
}