import { PlayerComponent } from './../player/player.component';
import { ResultComponent } from './../result/result.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ResultComponent, pathMatch: 'full' },
  { path: 'play/:id', component: PlayerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
