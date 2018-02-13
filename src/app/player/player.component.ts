import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  url: SafeResourceUrl
  constructor(private route: ActivatedRoute, private domSanitize: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe( 
      video => {
        this.url = this.domSanitize.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id}`)
        console.debug(this.url); 
      } 
    ) 
  }

}