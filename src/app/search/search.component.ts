import { ChannelData } from './../shared/model/topics';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms'
import * as fromSearchAction from './store/search.actions'
import * as fromChannelsAction from '../channels/store/channels.action'
import * as fromApp from '../store/app.reducers'
import { Store } from '@ngrx/store'
import { ALL_CHANNELS } from '../shared/model/topics';
import { SearchItem } from './store/search.actions';
import { FloatLabelType } from '@angular/material';
  
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup
  channels: ChannelData[]
  filterChannels: ChannelData[]

  searchTerm = new FormControl('');
  placeholder = "e.g. Angular5"
  floatLabel: FloatLabelType = 'never'

  constructor( private store: Store<fromApp.AppState>, private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      "searchTerm": this.searchTerm
    })

    this.store.select('channel')
      .subscribe( (channelData) => {
        this.filterChannels = channelData.filters; 
        this.channels = this.filterChannels.length > 0 ? channelData.filters 
        : ALL_CHANNELS.reduce( (acc, topic) => [...acc, ...topic.channels] ,[]) ; 
      })
    
    this.store.dispatch(new fromSearchAction.SearchItem({term: '', channels: this.channels}))  
  }

  onSubmit(){
    const term = this.searchTerm.value
    this.store.dispatch(new fromSearchAction.SearchItem({term, channels: this.channels}))
    this.route.navigate(['/']);
  }

  removeChannel(channel: ChannelData){
    this.store.dispatch(new fromChannelsAction.RemoveFilter(channel));
  }

}
