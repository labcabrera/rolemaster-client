import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  links = [
    { link: '/strategic-sessions', name: 'Strategic', icon: 'list' },
    { link: '/tactical-sessions', name: 'Tactical', icon: 'list' },
    { link: '/characters', name: 'Characters', icon: 'person' },
    { link: '/characters/creation', name: 'New character', icon: 'create' },
    { link: '/moving-maneuvers', name: 'Static-M', icon: 'scatter_plot' },
    { link: '/static-maneuvers', name: 'Moving-M', icon: 'scatter_plot' },
    { link: '/races', name: 'Races', icon: 'scatter_plot' },
    { link: '/professions', name: 'Professions', icon: 'scatter_plot' },
    { link: '/skill-categories', name: 'Skill categories', icon: 'build' },
    { link: '/skills', name: 'Skills', icon: 'build' },
    { link: '/training-packages', name: 'Training packages', icon: 'scatter_plot' },
    { link: '/talents', name: 'Talents', icon: 'scatter_plot' },
    { link: '/flaws', name: 'Flaws', icon: 'scatter_plot' },
    { link: '/spell-lists', name: 'Spell lists', icon: 'blur_on' },
    { link: '/spells', name: 'Spells', icon: 'blur_on' },
    { link: '/npc', name: 'NPCs', icon: 'pets' },
    { link: '/items', name: 'Items', icon: 'shopping_cart' },
  ]

  constructor(
    private loginService: LoginService,
    private oauthService: OAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  navigate(link: string) {
    this.sidenav.close();
    this.router.navigateByUrl(link);
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get isLogged() {
    return this.loginService.getIsLogged();
  }

  getUsername() {
    return this.loginService.getUsername();
  }

}
