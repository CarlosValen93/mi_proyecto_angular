
import { Component, inject } from '@angular/core';
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { IPost } from '../../interfaces/ipost.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrPosts: IPost[] = [];
  postService = inject(PostService)

  
  ngOnInit() {
    this.arrPosts = this.postService.getAll()
  }

}
