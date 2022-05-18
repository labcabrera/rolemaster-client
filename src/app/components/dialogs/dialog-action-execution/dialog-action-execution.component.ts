import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ignoreElements } from 'rxjs';

import { AttackCriticalExecution, FumbleExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';
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

  action?: TacticalAction;
  tacticalSession?: TacticalSession;
  characters: TacticalCharacter[] = [];

  constructor(
    private actionService: ActionService,
    private tacticalService: TacticalSessionService,
    private enumService: EnumService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>) {
    }

  ngOnInit(): void {
    this.dialogRef.updateSize('95%', '95%');
  }

  load(action: TacticalAction, characters: TacticalCharacter[]) {
    this.action = action;
    this.characters = characters;
  }

}
