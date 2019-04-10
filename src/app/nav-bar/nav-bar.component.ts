import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [GithubService],
})

export class NavBarComponent implements OnInit {
  userProfile;
    userName;
  constructor(private router: Router, private githubService: GithubService, private route:ActivatedRoute) { }

  goHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userName= urlParameters['username'];
    });
    this.getProfile()
  }

  getProfile(){
    this.githubService.getProfile(this.userName).subscribe(response=>{
      this.userProfile=response.json();
      console.log("user profile",this.userProfile);
    });
    // console.log("userProfile",this.userProfile)
  }
}
