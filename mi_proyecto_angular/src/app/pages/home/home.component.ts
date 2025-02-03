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
    console.log("🔄 Aplicando filtros en Home:", filters);
  
    const { categoryId, searchTitle } = filters;
  
    // Si no hay categoría ni título, mostrar todos los posts
    if (categoryId === null && !searchTitle.trim()) {
      console.log("✅ Mostrando todos los posts");
      this.filteredPosts = [...this.arrPosts]; // Copia todos los posts
      return;
    }
  
    // Aplicar filtros
    let filtered = this.arrPosts;
  
    if (categoryId !== null) {
      filtered = filtered.filter(post => post.category.id === categoryId);
    }
  
    if (searchTitle.trim()) {
      filtered = filtered.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }
  
    this.filteredPosts = filtered;
    console.log("📄 Posts después de filtrar:", this.filteredPosts);
  }
  
  
  
}
  