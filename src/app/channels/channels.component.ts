import { AddFilter } from './store/channels.action';
import { ALL_CHANNELS, ChannelData } from './../shared/model/topics';
import { AppState } from './../store/app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ChannelsData } from '../shared/model/topics';
import * as fromChannelsAction from '../channels/store/channels.action';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements AfterViewInit{
  channelTopics: ChannelsData[]
  
  constructor(private store: Store<AppState>) {
    this.channelTopics = ALL_CHANNELS;
  }

  ngAfterViewInit() {
    this.channelTopics = ALL_CHANNELS;
  }

  onChannelClick(channel: ChannelData){
    this.store.dispatch(new fromChannelsAction.AddFilter(channel))
  }

}
