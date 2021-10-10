import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] =[
    new Post('first project','failure is opportunity','henry-ford','liz','1/2/2021'),
    new Post('second project','knowledge and action','johann-wolf','beth','2/4/2021'),
    new Post('third project','self-believe','john-wooden','shii','11/3/2021'),
    new Post('fourth project','interfearance','serah-hart','ann','1/5/2021')
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
