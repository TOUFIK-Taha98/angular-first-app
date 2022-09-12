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
    this.mySnap = new FaceSnap('Archibald',
      'Mon meilleur amis depuis tout petit',
      new Date(),
      6,
      "https://picsum.photos/200/300",
      false);
    this.autherSnap = new FaceSnap('Bobby',
      'Enfin un ami',
      new Date(),
      3,
      "https://picsum.photos/200/300",
      false);
    this.thirdSnap = new FaceSnap('Testing',
      '3eme component',
      new Date(),
      10,
      "https://picsum.photos/200/300",
      false);
  }
}
