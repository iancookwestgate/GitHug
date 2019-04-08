# GoalBuddy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Features

Currently GoalBuddy's layout is being built, and functionality is limited. This current iteration shows a stripped down version of what I hope a user's home page will look like, as well as basic login/register page, and a "post-detail" page.

Since logging in is not yet available, the application only works as a "psuedo-user." This psuedo-user can create a new post which is saved in a FireBase database and displayed on a live feed. Eventually this feed will display posts for all real users.

The ability to create a new account is in development. Currently a user can input their email, desired username, and password. This input will be saved on the Firebase database in the "users" table. Eventually the login field will be formatted to query the user database to ensure that a logging-in user has already created an account (and entered the correct username and password, of course).

Currently a pseudo-user can navigate between several pages. They can click "logout" to return back to the "login" page. They can also click on a post in the live feed to view a "post-detail" page which is currently displaying the post in it's own page.

## Coming Features

The idea behind Goalbuddy is to create a social network for people to connect with other users that share similar goals. The primary feature is shared goal setting, and the ability for user's to establish a relationship of accountability.

A primary feature of the site will be the ability for a user to create a "pending buddy request", and to view said requests made by other users. If a user finds a goal they would like to actively participate in they can "connect" with the user that original created the request. Once users are connected they will have the ability to negotiate the parameters of the relationship.

Another primary feature is the social aspect of GoalBuddy. Like MyFitnessPal, users will be able to share their progress towards their goal, and like, comment, etc. on posts highlighting progress.

A secondary feature of Goalbuddy is gamifying established relationships in order to incentivize users to take full advantage of the platform. How this will be executed is not entirely clear at this point, however it will involve some form of reward for when users successfully complete the goals they set.

## Functionality progress

(In order of priority)

1.) leverage Angular's ability to pass data so that a user can create a post within the "profile-feed" component and have it passed down to the "public-feed" component.

2.) Connect Goalbuddy to a database so that user's posts can be saved, and real accounts can be made.

3.) Create a functioning "register" and "login" section

3.) Implement a real shared feed where a user can see other user's actual posts.

4.) Allow users to post real "requests", and also allow users to see other's "pending" requests.

5.) Allow uses to respond to requests and establish a relationship.

6.) Create messaging protocol that users can use to communicate about goals, and establish parameters of accountability.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Setup

In order to setup Goalbuddy on your machine you will need to:

1.) Clone it from [here](https://github.com/jackpaulcollins/friday-angular)

2.) Navigate to the folder in your command line and run "npm i" to install all dependencies

3.) "run ng serve --open" to open to the development server on your local machine

*Note: _If you would like to utilize your own database you will need to register and configure one at [Firebase](www.firebase.google.com)_*

The Firebase documentation can be found [Here](https://firebase.google.com/docs/)


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License


_Copyright (c) 2019 Jack Collins, Epicodus_
