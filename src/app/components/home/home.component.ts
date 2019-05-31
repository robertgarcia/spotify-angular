import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any[] = [];
  loading: boolean;
  constructor(
    private spotify: SpotifyService
  ) { 
    this.loading = true;
    spotify.getNewReleases().subscribe((data: any) =>{
      this.nuevosLanzamientos = data;
      this.loading = false; 
    });
  }

  ngOnInit() {
  }

}
