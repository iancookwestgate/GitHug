import { Component, OnInit} from '@angular/core';
import { Post } from "../models/post.model"
import { PostService } from '../post.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { FormControl } from '@angular/forms';
import { tinyApiKey } from '../api-keys';

import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css'],
  providers: [PostService, GithubService]
})
export class ProfileFeedComponent implements OnInit  {

  postBody = null;
  post = new FormControl('');
  apiKey = tinyApiKey;
  githubRepos;
  selectedRepo;

  showPostBody(){
    this.postBody = 1;
  }

  createPost(){
    this.postBody = null;
  }

  postSubmitted(post: string){
    const newPost: Post = new Post(post);
    this.postService.addPost(newPost)
  }

  constructor(private postService: PostService, public githubService: GithubService) {}

  ngOnInit() {
    this.setProfileInfo();
  }
  setProfileInfo(){
    this.githubService.getProfile().subscribe(response=>{
      this.githubRepos=response.json();
      console.log("user repos",this.githubRepos);
    });
  }

  addRepo(){

  }

}
