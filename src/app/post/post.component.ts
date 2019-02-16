import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Http2ServerResponse } from 'http2';
import { AppError } from '../Common/app-error';
import { NotFoundError } from '../Common/not-found-error';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadInput } from '../Common/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }


  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => { this.posts = posts;
        console.log(this.posts);
      }, error => {
        alert('an unexpected error occured while init.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        posts => {
          post['id'] = posts.id;
          console.log(posts);
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErros(error.originalError);
          } else {
            alert('an unexpected error occured while create.');
              console.log(error);
          }

      }
      );
  }

  update(post) {
    this.service.update(post)
      .subscribe(
        posts => {
        console.log(posts);
      }, error => {
        alert('an unexpected error occured while update.');
        console.log(error);
      });
  }

  delete(post) {
    console.log('post:' + post);
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => {
          console.log(post.userId);
        },
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('this post is already deleated');
        } else {
          alert('an unexpected error occured while delete.');
          console.log(error);
        }
    }
    );
  }
}
