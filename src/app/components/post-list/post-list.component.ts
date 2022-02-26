import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
  ) { 
    this.arrPost = new Array();
  }

  ngOnInit(): void {

    this.arrPost = this.postService.getAllPost();

    // this.activatedRoute.params.subscribe(params => {
    //   console.log('params', params)
    //   if(params['categorytitle']) {
    //    this.arrPost = this.postService.getPostByCategory(params['categorytitle'])
    //   }else {
    //     alert('No hay post de esta categoria')
    //   }
    // })
    
  }

  onCategory($event: string){
  
    this.arrPost = this.postService.getPostByCategory($event);
  }

}
