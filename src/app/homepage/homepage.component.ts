import { Component, OnInit } from '@angular/core';
// import { GithubService } from '../github.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


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
