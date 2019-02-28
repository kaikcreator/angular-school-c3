import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient, ) { }

  search(search){
    return this.http.get(`http://localhost:3000/posts?q=${search}`);
  }
}
