import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import {User} from '../models/users.model';
import {UserService} from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  login(){
    this.router.navigate(['home']);
  }

  createAccount(email: string, username: string, password: string){
    const newUser: User = new User(email,username,password);
    this.userService.addUser(newUser);
  }

  clearForm(){

  }

  ngOnInit() {
  }

}
