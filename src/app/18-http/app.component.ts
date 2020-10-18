import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.http
      .get('https://ng-shopping-47ffb.firebaseio.com/posts.json')
      .subscribe(posts => {
        console.log(posts);
      });
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    console.log('create post\n', postData);

    this.http
      .post(
        'https://ng-shopping-47ffb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onClearPosts() {
    // Send Http request
  }
  
  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

}
