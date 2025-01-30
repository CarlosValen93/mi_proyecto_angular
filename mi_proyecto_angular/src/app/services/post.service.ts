import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/icategory.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private arrCategories: ICategory[] = [
    { id: 1, title: 'Playa' },
    { id: 2, title: 'Montaña' },
    { id: 3, title: 'Ciudad' },
    { id: 4, title: 'Rural' },
    { id: 5, title: 'Festivales' }
  ]

}
