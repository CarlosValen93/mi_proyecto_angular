import { ICategory } from './../../interfaces/icategory.interface';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-form-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css'
})
export class FormPostComponent {
  
  formPost: FormGroup;
  categories : ICategory[]= [];
  postService = inject(PostService); 

  constructor() {
    this.formPost = new FormGroup({
      title: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      author: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      category: new FormControl("",[
        Validators.required
      ]),
      image: new FormControl("",[
        Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg))$/i),
      ]),
      text: new FormControl("",[
        Validators.required,
        Validators.minLength(100)

      ]),
      publication: new FormControl("",[
        Validators.required
      ])
    });
  }
  ngOnInit() {
    this.categories = this.postService.getCategories();
  }
  submitPost() {
    if (this.formPost.valid) {
      const newPost: IPost = this.formPost.value;
      this.postService.addPost(newPost); // 
     
      

      this.formPost.reset();
    }
  }
  
  checkErrorField(field: string, error: string): boolean {
    if (this.formPost.get(field)?.hasError(error) && this.formPost.get(field)?.touched) {
      return true;
    }
    return false;
  }
}
