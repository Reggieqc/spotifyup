import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {
  newSongs: any[] = []
  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases()
      .subscribe((data:any)=>{
        this.newSongs = data;
      });
  }

  ngOnInit() {
  }

}
