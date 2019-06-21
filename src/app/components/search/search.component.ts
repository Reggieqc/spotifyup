import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss','../new-releases/new-releases.component.scss']
})
export class SearchComponent implements OnInit {
  
  artists:any[]=[]

  constructor( private spotify:SpotifyService) { }

  ngOnInit() {
  }
  
  searchArtist(artistName:string){
    artistName ?
      this.spotify.getArtists(artistName)
        .subscribe((data:any)=>{
          this.artists= data;
          console.log(data)
        }) : this.artists= []
  } 
}