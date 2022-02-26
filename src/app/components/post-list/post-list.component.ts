import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  arrPost: Post[];
  constructor(
    private postService: PostService,
  ) { 
    this.arrPost = new Array();
  }

  ngOnInit(): void {

    this.arrPost = this.postService.getAllPost();  
  }

  onCategory($event: string){
  
    this.arrPost = this.postService.getPostByCategory($event);
  }

}
