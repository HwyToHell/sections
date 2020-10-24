import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error = null;
  isFetching = false;
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient, private postsService: PostsService) {}

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
      console.log(error);
    });
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log('create post\n', postData);
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onClearPosts() {
    console.log("clear");
    // delete all posts
    this.postsService.deletePosts().subscribe(() => {
     this.loadedPosts = [];
    });

    // delete first post only
    /*
    this.postsService.deleteSinglePost(this.loadedPosts[0].id).subscribe(() => {
      this.loadedPosts.shift();
     });
     */
  }

  onFetchPosts() {
    this.fetchPosts();
  }

}
