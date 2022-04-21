import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ignoreElements } from 'rxjs';

import { AttackCriticalExecution, FumbleExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
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
  characters: TacticalCharacterContext[] = [];

  constructor(
    private actionService: ActionService,
    private tacticalService: TacticalSessionService,
    private enumService: EnumService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>) {
    }

  ngOnInit(): void {
    this.dialogRef.updateSize('90%', '90%');
  }

  load(action: TacticalAction, characters: TacticalCharacterContext[]) {
    this.action = action;
    this.characters = characters;
  }

  /*
  loadActionExecution() {
    this.actionExecution.type = this.action.type;
    this.actionExecution.roll = { result: 0, rolls: [0] }
    this.actionExecution.secondaryRoll = { result: 0, rolls: [0] }
    if (this.action.type == 'melee-attack') {
      this.actionExecution.facing = 'normal';
      if (this.action.meleeAttackType != 'full') {
        this.actionExecution.target = this.action.target;
        this.actionExecution.secondaryTarget = this.action.secondaryTarget;
      }
    }
  }

  executeAction() {
    //TODO OpenRollComponent
    this.actionExecution.roll.rolls = [this.actionExecution.roll.result];
    this.actionExecution.secondaryRoll.rolls = [this.actionExecution.secondaryRoll.result];
    this.actionService.execute(this.action.id, this.actionExecution).subscribe(result => {
      //TODO reload actions
      this.action = result;
    });
  }

  executeCritical() {
    if (this.criticalExecution.roll == 0) {
      return;
    }
    this.actionService.executeCritical(this.action.id, this.criticalExecution).subscribe(result => {
      this.action = result;
    });
  }

  executeFumble() {
    if (this.fumbleExecution.roll == 0) {
      return;
    }
    this.actionService.executeFumble(this.action.id, this.fumbleExecution).subscribe(result => {
      this.action = result;
    });
  }
  */

}
