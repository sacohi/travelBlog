import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  @Output() newPost: EventEmitter<Post>;

  formPost: FormGroup;
  arrPost: Post[];
  arrCategories: Category[];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.newPost = new EventEmitter();
    this.arrCategories = new Array();
    this.arrPost = new Array();
    this.formPost = new FormGroup({

      title: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/)
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
       Validators.required
      ]),
      img: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/)
      
      ])
    }, [])
  }

  ngOnInit(): void {


    this.arrCategories = this.postService.getAllCategories();
   
  }

  getDataForm(){
    
    console.log(this.formPost.value);
    this.postService.agregarPost(this.formPost.value);
    this.formPost.reset({category: ''});
  
  }
  
  
    checkControl(pField: string, pValidator: string): boolean {
      if (this.formPost.get(pField)?.hasError(pValidator) && this.formPost.get(pField)?.touched) {
        return true;
      }
      else {
        return false;
      }
    }
}
