import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { GithubService } from '../github.service'

@Component({
  selector: 'app-github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.css'],
  providers: [AuthenticationService]
})

export class GithubLoginComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, public githubService:GithubService) {
    this.authService.user.subscribe(user => {
      console.log(user);
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

  }
}
