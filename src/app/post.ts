export class Post {
  showDescription: boolean;
    constructor (public title: string, public description: string, public author: string, public poster: string,public date: string,public upvote: string,public downvote: string,public delete: string ) {
        this.showDescription = false; 
    }
    
}
