import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';



@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css'],
  providers: [PostService]
})

export class PublicFeedComponent {

  postToDisplay: FirebaseListObservable<any[]>;


  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postToDisplay = this.postService.getPosts();
  }

  goToPost(clickedPost){
    this.router.navigate(['posts', clickedPost.$key])
  }

}
