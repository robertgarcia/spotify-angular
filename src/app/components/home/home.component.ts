import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any[] = [];
  constructor(
    private spotify: SpotifyService
  ) { 
    spotify.getNewReleases().subscribe((data: any) =>{
      this.nuevosLanzamientos = data;  
    });
  }

  ngOnInit() {
  }

}
