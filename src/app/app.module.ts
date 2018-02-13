import { SearchEffects } from './search/store/search.effects';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import 'hammerjs'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StoreModule } from '@ngrx/store/';
import { rootReducer } from './store/app.reducers';
import { ResultComponent } from './result/result.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ChannelsComponent } from './channels/channels.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ChannelsComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forRoot([SearchEffects]),
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
