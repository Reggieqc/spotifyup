import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  albums: any = {}

  constructor(private router: ActivatedRoute, private spotify: SpotifyService ) { 

    this.router.params.subscribe( params=>{
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
      this.getAlbumsArtist( params['id'] );
    })  
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.spotify.getArtist(id)
      .subscribe( artist =>{
        console.log(artist);
        this.artist = artist;
      })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
      .subscribe( topTracks =>{
        this.topTracks = topTracks;
      })
  }

  getAlbumsArtist(id:string){
    this.spotify.getAlbumsArtist(id)
      .subscribe( albums => {
        console.log(albums);
        this.albums = albums;
      })
  }
}
