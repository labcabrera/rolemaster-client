import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';

import { NamedKey } from 'src/app/model/commons';
import { TacticalAction } from 'src/app/model/actions';
import { EnumService } from 'src/app/services/enum.service';
import { ActionService } from 'src/app/services/action.service';
import { TacticalRound } from 'src/app/model/round';
import { TacticalCharacterContext } from 'src/app/model/character-context';

@Component({
  selector: 'app-dialog-select-action',
  templateUrl: './dialog-select-action.component.html',
  styleUrls: ['./dialog-select-action.component.scss']
})
export class DialogSelectActionComponent implements OnInit {

  characters: TacticalCharacterContext[] = [];
  tacticalSessionId: string = "";
  action: TacticalAction = { type: 'movement' } as TacticalAction;

  tacticalRoundUpdated?: TacticalRound;
  
  minActionPercent = 1;
  maxActionPercent = 100;
  movementPaces: NamedKey[] = [];
  meleeAttackTypes: NamedKey[] = [];
  actionPercentMap = new Map<string, number[]>([
    ["snap", [1, 20]],
    ["normal", [1, 80]],
    ["deliberate", [1, 100]],
  ]);

  @ViewChild(MatTabGroup) matTabGroup!: MatTabGroup;

  constructor(
    private actionService: ActionService,
    private enumService: EnumService
  ) { }

  ngOnInit(): void {
    this.enumService.findMovementPaces().subscribe(result => this.movementPaces = result);
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
  }

  public loadActionData(tacticalSessionId: string, source: string, priority: string, contexts: TacticalCharacterContext[]) {
    //TODO read current used percent from character
    this.minActionPercent = this.actionPercentMap.get(priority)![0];
    this.maxActionPercent = this.actionPercentMap.get(priority)![1];
    this.tacticalSessionId = tacticalSessionId;
    this.action.source = source;
    this.action.priority = priority;
    this.action.actionPercent = this.maxActionPercent;
    this.characters = contexts;
  }

  configureActionType(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.action.type = "movement";
        break;
      case 1:
        this.action.type = "melee-attack";
        break;
    }
    console.log("Mat change: ", event);
  }

  declareAction() {
    console.log("Tactical session id: ", this.tacticalSessionId);
    this.actionService.declare(this.tacticalSessionId, this.action).subscribe(result => {
      console.log("Declared action result: ", result);
      this.tacticalRoundUpdated = result;
    });
  }

}
