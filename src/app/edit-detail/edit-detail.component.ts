import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import {PostService} from '../post.service';
import { Post } from '../models/post.model';
import { FormControl } from '@angular/forms';
import { tinyApiKey } from '../api-keys';


@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
  providers: [PostService]
})

export class EditDetailComponent implements OnInit {
  postToDisplay;
  postId;
  post = new FormControl('');
  apiKey = tinyApiKey;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }


}
