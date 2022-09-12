import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: FaceSnap;
  autherSnap!: FaceSnap;
  thirdSnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur amis depuis tout petit',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://picsum.photos/200/300",
      snapped: false,
      location: 'Paris'
    };
    this.autherSnap = {
      title: 'Testing',
      description: '2eme component',
      createdDate: new Date(),
      snaps: 6,
      imageUrl: "https://picsum.photos/200/300",
      snapped: false,
      location: 'La montagne'
    };
    this.thirdSnap = {
      title: 'Bobby',
      description: 'Enfin un ami',
      createdDate: new Date(),
      snaps: 23,
      imageUrl: "https://picsum.photos/200/300",
      snapped: false
    };
  }
}
