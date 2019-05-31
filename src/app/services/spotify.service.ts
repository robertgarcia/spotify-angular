import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { 
    console.log('Spotify Service Listo');
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAm1jd7NNx7EUyMl9ktU0mdfae7Mw4mbnn7Gtx0E3VkSk3TGc_7vsuuKPO5j6TioCqVjOYpAnYH5U2Q9P0'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));;
    //this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map(data => data['albums'].items));
  }

  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers }).pipe(map(data => data['artists'].items));
  }

}
