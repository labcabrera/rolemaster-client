import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AttackCriticalExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { ActionService } from 'src/app/services/action.service';
import { EnumService } from 'src/app/services/enum.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';

@Component({
  selector: 'app-dialog-action-execution',
  templateUrl: './dialog-action-execution.component.html',
  styleUrls: ['./dialog-action-execution.component.scss']
})
export class DialogActionExecutionComponent implements OnInit {

  action: TacticalAction = {} as TacticalAction;
  tacticalSession: TacticalSession = {} as TacticalSession;

  actionExecution: TacticalActionExecution = {} as TacticalActionExecution;
  criticalExecution: AttackCriticalExecution = {} as AttackCriticalExecution;

  meleeAttackFacingValues: NamedKey[] = [];
  targets: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private tacticalService: TacticalSessionService,
    private enumService: EnumService,
    private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('80%', '80%');
    this.enumService.findMeleeAttackFacingList().subscribe(result => this.meleeAttackFacingValues = result);
  }

  load(action: TacticalAction, characters: TacticalCharacterContext[]) {
    this.action = action;
    this.loadActionExecution();
    this.loadTargets(characters);
  }

  loadActionExecution() {
    this.actionExecution.type = this.action.type;
    this.actionExecution.roll = { result: 0, rolls: [0] }
    if (this.action.type == 'melee-attack') {
      this.actionExecution.facing = 'normal';
      if(this.action.meleeAttackType != 'full') {
        this.actionExecution.target = this.action.target;
      }
    }
    this.criticalExecution.actionId = this.action.id;
  }

  loadTargets(characters: TacticalCharacterContext[]) {
    var source = this.action.source;
    var tmp: NamedKey[] = [];
    characters.forEach(function (character) {
      if (character.id != source) {
        tmp.push({ key: character.id, name: character.name });
      }
    });
    this.targets = tmp;
  }

  executeAction() {
    //TODO OpenRollComponent
    this.actionExecution.roll.rolls = [this.actionExecution.roll.result];
    this.actionService.execute(this.action.id, this.actionExecution).subscribe(result => {
      //TODO reload actions
      this.action = result;
    });
  }

  executeCritical() {
    this.actionService.executeCritical(this.action.id, this.criticalExecution).subscribe(result => {
      this.action = result;
    })
  }

  getOffensiveModifiers(): string[] {
    const map = new Map(Object.entries(this.action.offensiveBonusMap));
    var result: string[] = [];
    map.forEach((value, key) => {
      if (value != 0) {
        result.push(key + ": " + value);
      }
    });
    return result;
  }

  checkTargetVisible() {
    if(this.action.type != "melee-attack") {
      return false;
    }
    if(this.action.type == "melee-attack" && this.action.meleeAttackType == 'full') {
      return false;
    }
    return true;
  }

}
