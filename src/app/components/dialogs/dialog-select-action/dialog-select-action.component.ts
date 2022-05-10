import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalRound } from 'src/app/model/round';
import { TacticalCharacter } from 'src/app/model/character-context';

export interface Entry {
  key: string;
  value: string;
}

@Component({
  selector: 'app-dialog-select-action',
  templateUrl: './dialog-select-action.component.html',
  styleUrls: ['./dialog-select-action.component.scss']
})
export class DialogSelectActionComponent implements OnInit {

  source: TacticalCharacter = {} as TacticalCharacter;
  characters: TacticalCharacter[] = [];
  round: TacticalRound = {} as TacticalRound;
  priority: string = "";
  maxActionPercent = 100;

  tacticalAction: TacticalAction | undefined;

  actionPercentMap = new Map<string, number[]>([
    ["snap", [1, 20]],
    ["normal", [1, 80]],
    ["deliberate", [1, 100]],
  ]);

  constructor(private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('90%', '90%');
  }

  load(tacticalRound: TacticalRound, source: TacticalCharacter, priority: string, characters: TacticalCharacter[], actions: TacticalAction[]) {
    var maxPriorityPercent = this.actionPercentMap.get(priority)![1];
    var availablePercent = 100 - this.getUsedActivityPercent(source, actions);
    this.round = tacticalRound;
    this.priority = priority;
    this.source = source;
    this.characters = characters;
    this.maxActionPercent = Math.min(maxPriorityPercent, availablePercent);
  }

  loadAction(action: TacticalAction) {
    this.tacticalAction = action;
  }

  onActionCreation(event: any) {
    this.dialogRef.close();
  }

  private getUsedActivityPercent(character: TacticalCharacter, actions: TacticalAction[]): number {
    var usedPercent = 0;
    if (actions) {
      var list = actions.filter(e => character.id === e.source);
      list.forEach(e => {
        usedPercent += e.actionPercent;
      });
    }
    return usedPercent;
  }




}
