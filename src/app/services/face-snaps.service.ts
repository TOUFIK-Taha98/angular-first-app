import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur amis depuis tout petit',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snapped: false,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Testing',
      description: '2eme component',
      createdDate: new Date(),
      snaps: 6,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      snapped: false,
      location: 'La montagne',
    },
    {
      id: 3,
      title: 'Bobby',
      description: 'Enfin un ami',
      createdDate: new Date(),
      snaps: 23,
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      snapped: false,
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur amis depuis tout petit',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snapped: false,
      location: 'Paris',
    },
    {
      id: 5,
      title: 'Testing',
      description: '2eme component',
      createdDate: new Date(),
      snaps: 6,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      snapped: false,
      location: 'La montagne',
    },
    {
      id: 6,
      title: 'Bobby',
      description: 'Enfin un ami',
      createdDate: new Date(),
      snaps: 23,
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      snapped: false,
    },
  ];

  getAllfaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFacesnapById(faceSnapId: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === faceSnapId);
    if(!faceSnap) throw new Error('FaceSnap not found');
    else return faceSnap;
  }
  snapTheFaceById(faceSnapId: number, snapped: boolean) : void {
    const faceSnap = this.getFacesnapById(faceSnapId);
    snapped ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

// providedIn: "root" is the same as adding the service to the providers array in the app.module.ts file
