import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  
  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur amis depuis tout petit',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        snapped: false,
        location: 'Paris'
      },
      {
        title: 'Testing',
        description: '2eme component',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        snapped: false,
        location: 'La montagne'
      },
      {
        title: 'Bobby',
        description: 'Enfin un ami',
        createdDate: new Date(),
        snaps: 23,
        imageUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        snapped: false
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur amis depuis tout petit',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        snapped: false,
        location: 'Paris'
      },
      {
        title: 'Testing',
        description: '2eme component',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        snapped: false,
        location: 'La montagne'
      },
      {
        title: 'Bobby',
        description: 'Enfin un ami',
        createdDate: new Date(),
        snaps: 23,
        imageUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        snapped: false
      }
    ];
  }

}
