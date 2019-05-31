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
  error:Boolean
  messageError: string;
  constructor(
    private spotify: SpotifyService
  ) { 
    this.loading = true;
    this.error=false;
    spotify.getNewReleases().subscribe((data: any) =>{
      this.nuevosLanzamientos = data;
      this.loading = false; 
    }, (err) => {
      this.error = true;
      this.loading = false;
      this.messageError = err.error.error.message;
    });
  }

  ngOnInit() {
  }

}
