import { Component, OnInit} from '@angular/core';
import { Post } from "../models/post.model"
import { PostService } from '../post.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { FormControl } from '@angular/forms';
import { tinyApiKey } from '../api-keys';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css'],
  providers: [PostService]
})
export class ProfileFeedComponent implements OnInit  {


  postBody = null;
  post = new FormControl('');
  apiKey = tinyApiKey;
  userName;
  repoName;

  showPostBody(){
    this.postBody = 1;
  }
  createPost(){
    this.postBody = null;
  }
  postSubmitted(post: string){
    const newPost: Post = new Post(post, this.userName, this.repoName);
    this.postService.addPost(newPost)
  }

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userName= urlParameters['username'];
      this.repoName= urlParameters['repo'];
      console.log("params loaded", this.userName, this.repoName);
    });
  }

}
