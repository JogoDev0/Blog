import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        titulo: 'Xiaomi Mi Band 5, análisis: la mejor Mi Band hasta la fecha no es para todo el mundo',
        texto: 'Analizamos a fondo la Xiaomi Mi Band 5, esto es todo lo que da de sí la nueva pulsera de actividad de Xiaomi. Deportiva, barata y muy funcional.',
        autor: 'IVÁN LINARES',
        imagen: 'https://i.blogs.es/002322/xiaomi-mi-band-5-30/1024_682.jpg',
        fecha: new Date(2020, 6, 29),
        categoria: 'ANÁLISIS'
      },
      {
        titulo: 'Mega-guía para montarte un cine en casa: proyector, pantalla, sistema de sonido y más',
        texto: 'Esto es todo lo que necesitas si quieres montarte un cine en casa: proyector, pantalla, sistema de sonido y mucho más.',
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/12bdd1/cine/1024_682.jpg',
        fecha: new Date(2020, 7, 8),
        categoria: 'SELECCIÓN'
      },
      {
        titulo: 'Samsung Galaxy Note 20 y Note 20 Ultra: aún más grandes y con un S Pen preparado para la productividad y el juego',
        texto: 'Los nuevos Galaxy Note 20 de Samsung vienen con mayor tamaño, potencia y batería y heredando aspectos de los Galaxy S20.',
        autor: 'ANNA MARTÍ',
        imagen: 'https://i.blogs.es/caba0d/samsung-galaxy-note-20--note-20-ultra-00/1024_682.jpg',
        fecha: new Date(2020, 7, 5),
        categoria: 'MÓVILES'
      },
      {
        titulo: 'Cada vez hay más personas con alergias y la ciencia aún no tiene una respuesta para eliminarlas',
        texto: 'Las alergias acompañan al ser humano desde que comenzó a ser su propia especie. Sin embargo, parece que es ahora, y no hace un siglo, por ejemplo, cuando más hablamos de ellas. Esto se debe, en gran parte, a que están aumentando.',
        autor: 'SANTIAGO CAMPILLO',
        imagen: 'https://i.blogs.es/26fbe7/photo-1470217957101-da7150b9b681/1024_682.jpg',
        fecha: new Date(2020, 7, 7),
        categoria: 'CIENCIA'
      },
      {
        titulo: '"Rick y Morty" se transforman en personajes de anime con guiños a clásicos de la animación japonesa como "Akira" o "Dragon Ball"',
        texto: 'Por segundo año, para promocionar la programación de Toonami (el bloque dedicado al anime de Adult Swim, la facción de animación para adultos de Cartoon Network), "Rick y Morty" presenta una breve pieza de animación que hereda los temas y personajes de la serie norteamericana, pero le da un baño de estética y ritmo netamente nipones.',
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/d6eeab/rickanime/1366_2000.jpg',
        fecha: new Date(2020, 6, 27),
        categoria: 'CINE Y TV'
      }
    ]
  }



  agregarPost(post: Post): void {
    this.arrPost.push(post);
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      // localStorage.setItem("posts", JSON.stringify(this.arrPost));
      // resolve(JSON.parse(localStorage.getItem("posts")));
      resolve(this.arrPost);
      reject('ERROR: No se han podido recuperar los posts');
    });
  }

  getPostsByCategoria(cat: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost.filter(post => post.categoria === cat));
      reject(`ERROR: No se han podido obtener los posts de la categoria ${cat}`);
    });
  }
}
