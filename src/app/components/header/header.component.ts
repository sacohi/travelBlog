import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrPost: Post[];
  arrCategories: Category[];

  @Output() category: EventEmitter<string>;

  constructor(
    private postService: PostService,
    private router: Router
  ) { 
    this.arrCategories = new Array();
    this.arrPost = new Array();
    this.category = new EventEmitter();
  }

  ngOnInit(): void {

    this.arrCategories = this.postService.getAllCategories();
  }


  onSelectCategory($event: any): void {

    let category = $event.target.value;
    this.category.emit(category);

    if (category !== "") {
      this.router.navigateByUrl('category/' + category);
    } else {
      this.router.navigateByUrl('category=none');
    }

  }



}
