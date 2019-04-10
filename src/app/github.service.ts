import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getProfile(userName){
    return this.http.get(`https://api.github.com/users/${userName}/repos?per_page=100&sort=author-date-asc`);
  }

  // getImage(){
  //   return this.http.get(`https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj7qKqdjMbhAhUrhlQKHRYVCrcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.celebritysizes.com%2Fshia-labeouf-workout-routine%2F&psig=AOvVaw3ChnD-p1_Rj1Ax1_qW1nhQ&ust=1555005253235812`)
  // }

}
