import { Component, OnInit } from '@angular/core';
import { PostRepoService } from '../post-repo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repoPosts: FirebaseListObservable<any[]>;
  constructor( private postRepoService: PostRepoService ) { }

  ngOnInit() {
    this.repoPosts=this.postRepoService.getPosts();
  }

}
