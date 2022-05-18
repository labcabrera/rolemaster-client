import { Component, Input, OnInit } from '@angular/core';

import { TacticalCharacter } from 'src/app/model/character-context';
import { CharacterItem } from 'src/app/model/item';

@Component({
  selector: 'app-combat-status-icons',
  templateUrl: './combat-status-icons.component.html',
  styleUrls: ['./combat-status-icons.component.scss']
})
export class CombatStatusIconsComponent implements OnInit {

  @Input() character?: TacticalCharacter;

  constructor() { }

  ngOnInit(): void {
  }

  isDead(): boolean {
    return this.character!.hp.current < 1 ||
      this.character!.combatStatus.debuffs['mortal-damage'] > 0 || 
      this.character!.combatStatus.debuffs["instant-death"] > 0;
  }

  isWeaponBroken() {
    return this.character!.items.filter(e => this.isBrokenItem(e)).length > 0;
  }

  private isBrokenItem(item: CharacterItem): boolean {
    return item.features &&  item.features.filter(e => e.type === 'broken').length > 0;
  }

}
