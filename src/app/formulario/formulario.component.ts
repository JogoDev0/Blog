import { Component, OnInit } from '@angular/core';
import { BloggingService } from '../blogging.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private bloggingService: BloggingService) {

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
    console.log('onSubmit()', newPost);

    this.bloggingService.agregarPost(newPost);
  }
}
