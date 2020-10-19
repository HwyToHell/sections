import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>('https://ng-shopping-47ffb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          // key = firebase record ID
          for (const key in responseData) {
            // avoid accessing property of prototype
            if (responseData.hasOwnProperty(key)) {
              // responseDate[key] = { content, title }
              postsArray.push({ id: key, ...responseData[key] }); 
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
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
