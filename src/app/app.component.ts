import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular hello-world';

  courses = [1, 2];

  viewMode = 'map';

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'here is the body of the tweet..',
    isLiked: false,
    likesCount: 10,
  };

  onFavoriteChange(isFavorite) {
    console.log(isFavorite);
  }

  
}
