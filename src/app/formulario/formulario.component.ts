import { Component, OnInit } from '@angular/core';
import { BloggingService } from '../blogging.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  progress: number;

  mostrarProgress: boolean;

  constructor(private bloggingService: BloggingService, private router: Router) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    });

    this.progress = 0;
    this.mostrarProgress = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let newPost = new Post(
      this.formulario.controls.titulo.value,
      this.formulario.controls.texto.value,
      this.formulario.controls.autor.value,
      this.formulario.controls.imagen.value,
      this.formulario.controls.fecha.value,
      this.formulario.controls.categoria.value.toUpperCase()
    );
    // console.log('onSubmit()', newPost);

    this.bloggingService.agregarPost(newPost);

    this.mostrarProgress = true;
    setInterval(() => {
      this.progress = this.progress + 5;;
    }, 10);

    setTimeout(() => {
      this.router.navigate(['/blog']);
    }, 1000);

  }
}
