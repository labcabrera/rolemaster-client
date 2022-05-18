import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';
import { TacticalSession } from 'src/app/model/session';

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
    private dialogRef: MatDialogRef<any>) {
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('95%', '95%');
  }

  load(action: TacticalAction, characters: TacticalCharacter[]): void {
    this.action = action;
    this.characters = characters;
  }

}
