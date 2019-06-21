import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor( private http: HttpClient, private auth: AuthService) {
    console.log('Spotify service listo')
  }
  
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.token
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {    
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items ));    
  }

  getArtists(artistName: string) {
    return this.getQuery(`search?q=${artistName}&type=artist&limit=15`)
    .pipe( map(data =>  data['artists'].items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map(data => data['tracks']));
  }

  getAlbumsArtist(id: string) {
    return this.getQuery(`artists/${ id }/albums?&limit=3&include_groups=single,appears_on&market=us`)
    .pipe( map(data => data['items']));
  }

}
