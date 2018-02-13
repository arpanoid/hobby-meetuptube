import { ChannelData } from './../../shared/model/topics';
import { Action } from '@ngrx/store';

export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTER";

export class AddFilter implements Action{
    readonly type = ADD_FILTER
    constructor(public payload: ChannelData){}
}

export class RemoveFilter implements Action{
    readonly type = REMOVE_FILTER
    constructor(public payload: ChannelData){}
}

export class ClearFilter implements Action{
    readonly type = CLEAR_ALL_FILTERS
}

export type ChannelAction = AddFilter | RemoveFilter | ClearFilter