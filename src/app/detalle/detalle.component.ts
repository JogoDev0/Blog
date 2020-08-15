import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloggingService } from '../blogging.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detallePost: Post;

  constructor(private activatedRouted: ActivatedRoute, private bloggingService: BloggingService) {
    this.detallePost = new Post();
  }

  ngOnInit(): void {

    this.activatedRouted.params.subscribe(params => {

      this.bloggingService.getPostById(params.detalleId)
        .then(response => {
          this.detallePost = response;
        })
        .catch(error => console.log(error));

    })
  }

}
