import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
          'https://ng-shopping-47ffb.firebaseio.com/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

    deletePosts() {
    // delete all data by specifiying posts.json
      return this.http.delete('https://ng-shopping-47ffb.firebaseio.com/posts.json');
    }

    deleteSinglePost(id: string) {
      const url = 'https://ng-shopping-47ffb.firebaseio.com/posts/' + id + '.json';
      console.log(url);
        return this.http.delete(url);
    }

    fetchPosts() {
      return this.http
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
      );
    }

}
