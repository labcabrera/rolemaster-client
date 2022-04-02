import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  links = [
    { link: '/strategic-sessions', name: 'Strategic sessions', icon: 'list'},
    { link: '/tactical-sessions', name: 'Tactical sessions', icon: 'list'},
    { link: '/characters', name: 'Characters', icon: 'person'},
    { link: '/characters/creation', name: 'Character creation', icon: 'create'},
    { link: '/tactical', name: 'Tactical view', icon: 'create'},
    { link: '/movement', name: 'Movement', icon: 'scatter_plot'},
    { link: '/moving-maneuvers', name: 'Static maneuvers', icon: 'scatter_plot'},
    { link: '/static-maneuvers', name: 'Moving maneuvers', icon: 'scatter_plot'},
    { link: '/races', name: 'Races', icon: 'scatter_plot'},
    { link: '/professions', name: 'Professions', icon: 'scatter_plot'},
    { link: '/skill-categories', name: 'Skill categories', icon: 'scatter_plot'},
    { link: '/skills', name: 'Skills', icon: 'build'},
    { link: '/spell-lists', name: 'Spell lists', icon: 'build'},
    { link: '/spells', name: 'Spells', icon: 'blur_on'},
    { link: '/npc', name: 'NPCs', icon: 'pets'},
    { link: '/items', name: 'Items', icon: 'shopping_cart'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(link: string) {
    this.sidenav.close();
    this.router.navigateByUrl(link);
  }

}
