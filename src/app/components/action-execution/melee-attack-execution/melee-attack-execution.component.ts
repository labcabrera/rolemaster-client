import { Component, Input, OnInit } from '@angular/core';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { AttackCriticalExecution, FumbleExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-melee-attack-execution',
  templateUrl: './melee-attack-execution.component.html',
  styleUrls: ['./melee-attack-execution.component.scss']
})
export class MeleeAttackExecutionComponent implements OnInit {

  @Input() action: TacticalAction = {} as TacticalAction;
  @Input() actionExecution: TacticalActionExecution = {} as TacticalActionExecution;
  @Input() tacticalSession: TacticalSession = {} as TacticalSession;
  @Input() characters: TacticalCharacterContext[] = [];
  @Input() criticalExecution: AttackCriticalExecution = { roll: 0 };
  @Input() fumbleExecution: FumbleExecution = { roll: 0 };

  meleeAttackFacingValues: NamedKey[] = [];
  availableTargets: NamedKey[] = [];

  constructor(
    private enumService: EnumService) { }

  ngOnInit(): void {
    this.enumService.findMeleeAttackFacingList().subscribe(result => this.meleeAttackFacingValues = result);
    this.loadAvailableTargets();
  }

  loadAvailableTargets() {
    var result: NamedKey[] = [];
    this.characters.filter(e => e.id != this.action.source && e.hp.current > 0)
      .forEach(function (character) {
        result.push({ key: character.id, name: character.name });
      });
    this.availableTargets = result;
  }

  getCharacterName(characterId: string) {
    return this.characters.filter(e => e.id == characterId)[0].name;
  }

}
