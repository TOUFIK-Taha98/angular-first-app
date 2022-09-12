export class FaceSnapModel {
    constructor(public title: string, 
        public description: string, 
        public createdDate: Date, 
        public snaps: number, 
        public imageUrl: string) {
    }
}

// C'est la même chose que ce qui est en bas.

// export class FaceSnapModel {
//     title: string;
//     description: string;
//     createdDate: Date;
//     snaps: number;
//     imageUrl: string;

//     constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string) {
//         this.title = title;
//         this.description = description;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
//         this.imageUrl = imageUrl;
//     }
// }