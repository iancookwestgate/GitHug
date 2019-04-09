import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PublicFeedComponent } from './public-feed/public-feed.component';
import { LoginComponent } from './login/login.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';

const appRoutes: Routes = [
  {
     path: '',
     component: LoginComponent
   },
   {
      path: 'home',
      component: HomepageComponent
    },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'posts/edit/:id',
    component: EditDetailComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
