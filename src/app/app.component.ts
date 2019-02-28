import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts;
  constructor(private postsService:PostsService){}

  public searchPosts(text){
    this.postsService.search(text)
    .subscribe(data => this.posts = data );
  }
}
