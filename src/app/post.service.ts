import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts(){
    return this.posts;
  }

  getPostById(postId: string){
    return this.database.object('posts/' + postId)
  }

  deletePost(localPostToDelete){
    let postInFireBase = this.getPostById(localPostToDelete.$key);
    postInFireBase.remove();
  }

  addPost(newPost: Post){
    this.posts.push(newPost)
  }

}
