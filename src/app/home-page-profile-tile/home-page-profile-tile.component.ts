import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home-page-profile-tile',
  templateUrl: './home-page-profile-tile.component.html',
  styleUrls: ['./home-page-profile-tile.component.css'],
  providers: [GithubService, UserService]
})
export class HomePageProfileTileComponent implements OnInit {

  constructor(private githubService:GithubService, private userService:UserService) { }
  userProfile;
  githubRepos;
  ngOnInit() {
    this.userService.getUsers().subscribe(response=>{
      this.setProfileInfo(response[2].github);
    });

  }
  // needs to be updated with only one user
  getProfile(){
    this.userService.getUsers().subscribe(response=>{
      this.userProfile=response;
      console.log("user profile",this.userProfile);
    });
    // console.log("userProfile",this.userProfile)
  }

  setProfileInfo(github){
    this.githubService.getProfile(github).subscribe(response=>{
      this.githubRepos=response.json();
      // console.log("thisprofile",this.githubRepos);
    });
  }



}
