import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/ipost.interface';
import { SearchPostComponent } from "../../components/search-post/search-post.component";
import { PostCardComponent } from "../../components/post-card/post-card.component";

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
  updateFilters(filters: { categoryId: number | null, searchTitle: string }) {

  
    const { categoryId, searchTitle } = filters;

    if (categoryId === null && !searchTitle.trim()) {

      this.filteredPosts = [...this.arrPosts]; 
      return;
    }
  
    let filtered = this.arrPosts;
  
    if (categoryId !== null) {
      filtered = filtered.filter(post => post.category.id === categoryId);
   
  
  
    }else  if (searchTitle.trim()) {
      filtered = filtered.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }
  
    this.filteredPosts = filtered;

  }
  
  
  
}
  