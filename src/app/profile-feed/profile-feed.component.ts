import { Component, OnInit} from '@angular/core';
import { Post } from "../models/post.model"
import { PostService } from '../post.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css'],
  providers: [PostService]
})
export class ProfileFeedComponent implements OnInit  {

  postBody = null;



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

  constructor(private postService: PostService) {}

  ngOnInit() {
  }


}
