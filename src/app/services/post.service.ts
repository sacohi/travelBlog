import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];
  arrCategories: Category[];
  id: number;

  constructor() { 
    this.arrPost = new Array();
    this.id = 0;
    this.arrCategories = new Array(
      {
        title: 'Playa'
      },
      {
        title: 'Montaña'
      },
      {
        title:  'Ciudad'
      },
      {
        title:'Rural'
      },
      {
        title: 'Festivales'
      },
    );
  }


  getAllPost() : Post[]{
    return this.arrPost;
  }

  agregarPost(pPost: Post) : void{
    if(pPost !== undefined){
      this.id = this.id + 1;
      pPost.id = this.id; 
      this.arrPost.push(pPost);
      console.log(this.arrPost)
    }

}

getById(pId: number) : Post | undefined{
  return this.arrPost.find(post => post.id === pId);
}

getPostByCategory(pCat: string) : Post[]{

  if (pCat !== ""){
    return this.arrPost.filter(post => post.category === pCat)
  } else {
    return this.arrPost;
  }

  // return this.arrPost.filter(post => post.category === pCat );
  
}

getAllCategories() : Category[]{
  return this.arrCategories;
}

}
