import { IPost } from './../../interfaces/ipost.interface';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';

import { SearchPostComponent } from "../../components/search-post/search-post.component";
import { PostCardComponent } from "../../components/post-card/post-card.component";

@Component({
    selector: 'app-home',
    imports: [PostCardComponent, SearchPostComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private postService = inject(PostService);
    arrPosts: IPost[] = [];
    filteredPosts: IPost[] = [];

    // Este metodo para resetear la lista de posts, que lo llamare en diferentes ocasiones
    resetPosts() {
        this.filteredPosts = this.arrPosts.slice(); 
    }

    ngOnInit() {
        this.arrPosts = this.postService.getAll();
        this.resetPosts();
    }
 //función con la que el usuario hace la búsqueda de categoria y de titulo a la vez, necesite un poco de ayuda porque al tener dos busquedas enlazadas me costaba ver todo

    updateFilters(filters: { categoryId: number | null, searchTitle: string }) {
        const { categoryId, searchTitle } = filters;

        if (categoryId === null && !searchTitle.trim()) {
            this.resetPosts();
            return;
        }

        let filtered = this.arrPosts;

        if (categoryId !== null) {
            filtered = filtered.filter(post => post.category.id === categoryId);
        }

        if (searchTitle.trim()) { 
            filtered = filtered.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()));
        }

        this.filteredPosts = filtered;
    }
}
