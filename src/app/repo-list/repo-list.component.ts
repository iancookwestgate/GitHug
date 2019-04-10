import { Component, OnInit } from '@angular/core';
import { PostRepoService } from '../post-repo.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})

export class RepoListComponent implements OnInit {
  repoPosts: FirebaseListObservable<any[]>;
  userName;
  constructor( private postRepoService: PostRepoService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.repoPosts=this.postRepoService.getPosts();
  }

  navigateRepo(repoName){
    this.route.params.forEach((urlParameters) => {
      this.userName= urlParameters['username'];
    });
    this.router.navigate(['users',this.userName,repoName]);
  }
}
