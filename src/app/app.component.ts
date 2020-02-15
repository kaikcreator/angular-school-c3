import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // IMPORTANT UPDATE related with Angular 9:
  // You should use the object {static: true} as the second paramenter in the ViewChild decorator,
  // otherwise you'll get a runtime error.
  // like this:
  //
  // @ViewChild('search', { static: true }) searchBox: SearchboxComponent;
  //
  public posts;
  constructor(private postsService: PostsService) { }

  public searchPosts(text) {
    this.postsService.search(text)
      .subscribe(data => this.posts = data);
  }
}
