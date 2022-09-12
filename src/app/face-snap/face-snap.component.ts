import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string; //! permet d'initialiser la variable pour que TS comprend et evite de tomber dans l'undefined
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;

  // Ng OnInit sera appelé une fois par instance au moment de sa création
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur amis depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://static8.depositphotos.com/1372276/930/i/600/depositphotos_9306897-stock-photo-internet-browser-and-url.jpg"
    this.snapped=false;
  }
  // Function qui se déclenchera sur le click du boutton pour incrémenter les snaps
  onSnap(state: boolean) {
    if(state) {
      this.snaps--;
      this.snapped = false;
    }else{
      this.snaps++;
      this.snapped = true;
    }
  }
}

// @ => décorateur. C'est un mécanisme qui permet d'ajouter des métadonnées à une classe, un attribut, une méthode, etc.
// Un décorateur en TypeScript permet, entre autres,
// d'apporter des modifications à une classe.
// Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application.
// Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !
