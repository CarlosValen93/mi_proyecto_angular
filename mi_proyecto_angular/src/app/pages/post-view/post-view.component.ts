import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-view',
  imports: [RouterLink],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {

 
   postService = inject(PostService)
    router = inject(Router)
    route = inject(ActivatedRoute)
  
    post! : IPost;
  
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('idpost')); 

  
      const response = this.postService.getById(id);
     
  
      if (response) {
        this.post = response;
      } else {
        alert(' El post no existe');
        this.router.navigate(['/home']);
      }
    }
  }

