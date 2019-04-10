import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GithubService} from '../github.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  repoPosts:
  FirebaseListObservable<any[]>;
  readme;
  userName;
  repoName;
  constructor( private router:Router, private route: ActivatedRoute, private githubservice: GithubService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userName = urlParameters['userName'];
      this.repoName = urlParameters['repo'];
    });
  }

  showReadMe() {
    console.log()
    this.githubservice.getReadMe(this.userName, this.repoName).subscribe(Response => {this.readme = Response.json();
    console.log(this.readme);
    }
  )
 }
}
