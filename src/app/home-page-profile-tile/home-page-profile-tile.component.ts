import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { UserService } from '../user.service';
import { PostRepoService } from '../post-repo.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostRepo } from '../models/postRepo.model';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-home-page-profile-tile',
  templateUrl: './home-page-profile-tile.component.html',
  styleUrls: ['./home-page-profile-tile.component.css'],
  providers: [GithubService, UserService, PostRepoService]
})
export class HomePageProfileTileComponent implements OnInit {

  constructor(private githubService:GithubService, private userService:UserService, private postRepoService:PostRepoService, public route:ActivatedRoute) { }
  userProfile;
  githubRepos;
  userName;
  // selectedRepo;
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userName= urlParameters['username'];
    });
    this.setProfileInfo();
    this.getProfile();
  }
  // needs to be updated with only one user
  getProfile(){
    this.githubService.getProfile(this.userName).subscribe(response=>{
      this.userProfile=response.json();
      console.log("user profile",this.userProfile);
    });
    // console.log("userProfile",this.userProfile)
  }

  setProfileInfo(){
    this.githubService.getRepos(this.userName).subscribe(response=>{
      this.githubRepos=response.json();
      console.log("thisprofile",this.githubRepos);
    });
  }

  selectRepo(repo){
    console.log(repo);
    let newRepo= new PostRepo(repo);
    this.postRepoService.addPost(newRepo);
  }

}
