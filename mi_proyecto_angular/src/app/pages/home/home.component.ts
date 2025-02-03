
import { ChangeDetectorRef,OnInit,   Component, inject } from '@angular/core';
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { IPost } from '../../interfaces/ipost.interface';
import { PostService } from '../../services/post.service';
import { SearchPostComponent } from "../../components/search-post/search-post.component";

@Component({
  selector: 'app-home',
  imports: [PostCardComponent, SearchPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private postService = inject(PostService);
  arrPosts: IPost[] = [];
  filteredPosts: IPost[] = [];

  ngOnInit() {
    this.arrPosts = this.postService.getAll();
    this.filteredPosts = [...this.arrPosts];
  }

 
}