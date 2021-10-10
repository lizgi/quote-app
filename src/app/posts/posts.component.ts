import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] =[
    new Post('first project','Failure is the opportunity to begin again more intelligently.','henry-ford','liz','1/2/2021'),
    new Post('second project','Knowing is not enough,we must apply.Wishing is not enough,we must do.','johann-wolf','beth','2/4/2021'),
    new Post('third project','Believe in yourself and all that you are.Know there is something inside you that is greater than any obstacle.','john-wooden','shii','11/3/2021'),
    new Post('fourth project','Dont let what you cannot do interfere with what you can do.','serah-hart','ann','1/5/2021')
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
