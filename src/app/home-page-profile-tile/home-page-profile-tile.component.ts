import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home-page-profile-tile',
  templateUrl: './home-page-profile-tile.component.html',
  styleUrls: ['./home-page-profile-tile.component.css'],
  providers: [GithubService]
})
export class HomePageProfileTileComponent implements OnInit {

  constructor(public githubService:GithubService) { }
  profile;
  ngOnInit() {
    // this.setProfileInfo();
  }

  setProfileInfo(){
    this.githubService.getProfile().subscribe(response=>{
      this.profile=response.json();
      console.log("thisprofile",this.profile);
    });
  }

}
