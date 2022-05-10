import { Component, ViewChild } from '@angular/core';
import { AuthConfig, OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { MatSidenav } from '@angular/material/sidenav';

import { LoginService } from './services/login.service';
import { ErrorService } from './services/error.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RM Engine';
  showSideBar = true;

  username: string = "anonymous";
  isLogged: boolean = false;
  isAdmin: boolean = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private oauthService: OAuthService,
    private loginService: LoginService,
    private errorService: ErrorService
  ) {
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: environment.oauthIssuer,
    redirectUri: window.location.origin,
    clientId: 'rolemaster-client',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
      .then(() => {
        if (this.oauthService.getIdentityClaims()) {
          this.isLogged = this.loginService.getIsLogged();
          this.isAdmin = this.loginService.getIsAdmin();
          this.username = this.loginService.getUsername();
          this.errorService.displayError(this.loginService.getUsername());
        }
      });
  }

}
