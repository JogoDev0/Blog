import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { BloggingService } from '../blogging.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];
  arrCategorias: string[];

  constructor(
    private blogginService: BloggingService,
    private viewportScroller: ViewportScroller,
    private router: Router) {

    this.arrPost = [];
    this.arrCategorias = ['TODO'];
  }

  ngOnInit(): void {

    this.blogginService.getAllPosts()
      .then(response => {
        this.arrPost = response

        for (const post of this.arrPost) {
          if (this.arrCategorias.findIndex(categoria => categoria === post.categoria) === -1) {
            this.arrCategorias.push(post.categoria);
          }
        }
      })
      .catch(error => console.log(error));
  }

  async onChange($event) {

    if ($event.target.value === 'TODO') {
      try {
        this.arrPost = await this.blogginService.getAllPosts();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        this.arrPost = await this.blogginService.getPostsByCategoria($event.target.value);
      } catch (error) {
        console.log(error);
      }
    }
  }

  onClick(id) {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/detalle', id]);
  }

}
