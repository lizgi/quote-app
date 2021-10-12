import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] =[
    new Post('first quote','Failure is the opportunity to begin again more intelligently.','henry-ford','liz','1/2/2021',0,0),
    new Post('second quote','Knowing is not enough,we must apply.Wishing is not enough,we must do.','johann-wolf','beth','2/4/2021',0,0),
    new Post('third quote','Believe in yourself and all that you are.Know there is something inside you that is greater than any obstacle.','john-wooden','shii','11/3/2021',0,0),
    new Post('fourth quote','Dont let what you cannot do interfere with what you can do.','serah-hart','ann','1/5/2021',0,0)
  ]



showDetails(index:number){
  this.posts[index].showDescription=!this.posts[index].showDescription
}
// upvote(){
//   this.posts.upvote+=1
// }

// downvote(){
//   this.posts.downvote+=1
// }
  constructor() { }

  ngOnInit(): void {
  }

}
