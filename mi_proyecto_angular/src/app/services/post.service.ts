import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/icategory.interface';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private arrCategories: ICategory[] = [
    { id: 1, title: 'playa' },
    { id: 2, title: 'montaña' },
    { id: 3, title: 'ciudad' },
    { id: 4, title: 'rural' },
    { id: 5, title: 'festivales' }
  ]

  arrPosts: IPost[]=[
    {
      _id: 1,
      title: "Las Mejores Playas del Caribe",
      text: "Descubre las playas más paradisíacas del Caribe y disfruta de su belleza.",
      author: "Juan Pérez",
      image: "https://www.viajesylugares.com/images/showid/5341217",
      publication: new Date('2024-02-10'),
      category: this.arrCategories[0] // Playa
    },
    {
      _id: 2,
      title: "Escapada a la Montaña",
      text: "Explora rutas de senderismo y disfruta de la naturaleza en estado puro.",
      author: "María López",
      image: "https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1a-clima-min-e1533762913759.jpg",
      publication: new Date('2024-02-15'),
      category: this.arrCategories[1] // Montaña
    },
    {
      _id: 3,
      title: "Vida Nocturna en la Ciudad",
      text: "Las mejores ciudades para salir de fiesta y disfrutar de la noche.",
      author: "Pedro Ramírez",
      image: "https://www.nexotur.com/fotos/1/Madrid_6418b97a384c8_thumb_690.jpg",
      publication: new Date('2024-03-05'),
      category: this.arrCategories[2] // Ciudad
    },

  ];

  getAll(): IPost[] {
    return this.arrPosts;
  }
  getById(idPost: number): IPost| undefined {
    return this.arrPosts.find(post => post._id === idPost)
  }
  
  addPost(newPost: IPost) {
    // Asignar un ID único basado en la longitud del array + 1
    newPost._id = this.arrPosts.length + 1;
    this.arrPosts.push(newPost);
    console.log('✅ Post agregado:', newPost);
  }
  getCategories(): ICategory[] {
    return this.arrCategories;
  }
  

}
