import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}

  // Ng OnInit sera appelé une fois par instance au moment de sa création
  ngOnInit() {
    const facesnapId = +this.route.snapshot.params['id'];
    // + transformer une chaine de caractere en nombre
    this.faceSnap = this.faceSnapService.getFacesnapById(facesnapId);
  }
  // Function qui se déclenchera sur le click du boutton pour incrémenter les snaps
  onSnap(state: boolean) {
    if(state) {
      this.faceSnap.snapped = false;
    }else{
      this.faceSnap.snapped = true;
    }
    this.faceSnapService.snapTheFaceById(this.faceSnap.id,this.faceSnap.snapped);
    
  }
}

// @ => décorateur. C'est un mécanisme qui permet d'ajouter des métadonnées à une classe, un attribut, une méthode, etc.
// Un décorateur en TypeScript permet, entre autres,
// d'apporter des modifications à une classe.
// Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application.
// Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !
