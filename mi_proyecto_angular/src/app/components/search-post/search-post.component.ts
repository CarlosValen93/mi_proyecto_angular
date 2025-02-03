import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ICategory } from '../../interfaces/icategory.interface';

@Component({
  selector: 'app-search-post',
  imports: [FormsModule],
  templateUrl: './search-post.component.html',
  styleUrl: './search-post.component.css'
})
export class SearchPostComponent implements OnInit {
  private postService = inject(PostService);
  categories: ICategory[] = [];
  selectedCategoryId: number | null = null;
  searchTitle: string = '';

  @Output() filtersChanged = new EventEmitter<{ categoryId: number | null, searchTitle: string }>();

  ngOnInit() {
    this.categories = this.postService.getCategories();
  }
  onFilterChange() {
    console.log("🔍 Filtros actualizados - Categoría:", this.selectedCategoryId, "Título:", this.searchTitle);
  
    this.filtersChanged.emit({
      categoryId: this.selectedCategoryId !== null ? Number(this.selectedCategoryId) : null,
      searchTitle: this.searchTitle.trim().toLowerCase()
    });
  }
  
  
  
}

