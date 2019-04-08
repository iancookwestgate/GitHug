import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  this.configureWithNewConfigApi();
}
  private configureWithNewConfigApi() {
  this.oauthService.configure(authConfig);
  this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  this.oauthService.loadDiscoveryDocumentAndTryLogin();
}
  ngOnInit() {
  }

}
