import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [GithubService],
})

export class NavBarComponent implements OnInit {

  constructor(private router: Router, private githubService: GithubService) { }

  goHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
