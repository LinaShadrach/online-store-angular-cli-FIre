import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from '../album.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

constructor(private router: Router, private albumService: AlbumService) { }
  albums: FirebaseListObservable<any[]>;
  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }
  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };


}
