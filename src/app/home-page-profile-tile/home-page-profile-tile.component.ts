import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-profile-tile',
  templateUrl: './home-page-profile-tile.component.html',
  styleUrls: ['./home-page-profile-tile.component.css']
})
export class HomePageProfileTileComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() userProfile;
  @Input() repos;

  ngOnInit() {
  }

  // goToRepo(reponame){
  //   this.router.navigate(['users',this.userProfile.login,reponame])
  // }
}
