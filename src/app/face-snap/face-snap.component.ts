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

  // Ng OnInit sera appelé une fois par instance au moment de sa création
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur amis depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
  }
}

// @ => décorateur. C'est un mécanisme qui permet d'ajouter des métadonnées à une classe, un attribut, une méthode, etc.
// Un décorateur en TypeScript permet, entre autres,
// d'apporter des modifications à une classe.
// Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application.
// Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !
