import { Injectable } from '@angular/core';
import { PostRepo } from './models/postRepo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostRepoService {
  repoPosts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.repoPosts = database.list('repoPosts');
  }

  getPosts(){
    return this.repoPosts;
  }

  getPostById(postId: string){
    return this.database.object('repoPosts/' + postId)
  }

  deletePost(localPostToDelete){
    let postInFireBase = this.getPostById(localPostToDelete.$key);
    postInFireBase.remove();
  }

  addPost(newPost: PostRepo){
    this.repoPosts.push(newPost)
  }

}
