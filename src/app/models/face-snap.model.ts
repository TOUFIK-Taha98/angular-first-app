// export class FaceSnap {
//   constructor(
//     public title: string,
//     public description: string,
//     public createdDate: Date,
//     public snaps: number,
//     public imageUrl: string,
//     public snapped: boolean,
//     public location?: string
//   ) {
//     // ? Permet de dire que l'attribut est optionnel.
//   }
// }

// C'est la même chose que ce qui est en bas.

export class FaceSnap {
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    snapped!: boolean;
    location?: string;
}
