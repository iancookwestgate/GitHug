import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Component } from '@angular/core';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private oauthService: OAuthService) {
      this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}
