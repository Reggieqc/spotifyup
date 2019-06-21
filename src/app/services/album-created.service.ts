import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AlbumCreatedService {

  constructor(private db:AngularFireDatabase) { }
  
  create(album){
    return this.db.list('/albumcreated').push(album);
  }

  getAll() {
    return this.db.list('/albumcreated').valueChanges();
  }

  getAlbumId(albumId){
    return this.db.object('/albumcreated' + albumId)
  }
}
