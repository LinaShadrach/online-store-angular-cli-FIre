import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Album } from '../album.model';
import { Location } from '@angular/common';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  selectedAlbum: FirebaseObjectObservable<any>;
  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }



  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.selectedAlbum = this.albumService.getAlbumById(this.albumId);
  }

}
