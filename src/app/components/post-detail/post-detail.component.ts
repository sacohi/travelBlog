import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {


  post: Post | undefined;
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idpost']);
      this.post = this.postService.getById(id);
    })



  }



}
