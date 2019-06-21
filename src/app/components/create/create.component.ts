import { Component, OnInit } from '@angular/core';
import { AlbumCreatedService } from '../../services/album-created.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../new-releases/new-releases.component.scss', './create.component.scss']
})
export class CreateComponent implements OnInit {
  albumsCreated$;
  constructor( private albumCreatedService: AlbumCreatedService) { 
    this.albumsCreated$ = this.albumCreatedService.getAll();
    console.log(this.albumsCreated$)
  }

  save(album){
    console.log(album);
    this.albumCreatedService.create(album);
  }

  ngOnInit() {
  }

}
