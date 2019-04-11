import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { GithubService } from '../github.service';
// import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  @Input() userProfile;
  constructor(private router: Router) { }
  goHome(){
    this.router.navigate(['users',this.userProfile.login]);
  }
  logout(){
    this.router.navigate(['']);
  }

  ngOnInit() {

  }

  // getProfile(){
  //   this.githubService.getProfile(this.userName).subscribe(response=>{
  //     this.userProfile=response.json();
  //     console.log("user profile",this.userProfile);
  //   });
  //   // console.log("userProfile",this.userProfile)
  // }
}
