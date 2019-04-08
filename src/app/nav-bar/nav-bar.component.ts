import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
