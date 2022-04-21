import { Component, OnInit, Input } from '@angular/core';
import { TacticalAction } from 'src/app/model/actions';
import { EnumService } from 'src/app/services/enum.service';

import { NamedKey } from 'src/app/model/commons';
import { TacticalCharacterContext } from 'src/app/model/character-context';

@Component({
  selector: 'app-action-declaration-melee-attack',
  templateUrl: './action-declaration-melee-attack.component.html',
  styleUrls: ['./action-declaration-melee-attack.component.scss']
})
export class ActionDeclarationMeleeAttackComponent implements OnInit {

  @Input() action: TacticalAction = {} as TacticalAction;
  @Input() maxActionPercent: number = 100;
  @Input() characters: TacticalCharacterContext[] = [];

  meleeAttackTypes: NamedKey[] = [];
  meleeAttackModes: NamedKey[] = [];

  constructor(
    private enumService: EnumService
  ) { }

  ngOnInit(): void {
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
    this.enumService.findMeleeAttackModes().subscribe(result => this.meleeAttackModes = result);
  }

}
