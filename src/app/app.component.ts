import { Component, Input } from '@angular/core';
import {ProfileFeedComponent} from './profile-feed/profile-feed.component'
import { Post } from './models/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
