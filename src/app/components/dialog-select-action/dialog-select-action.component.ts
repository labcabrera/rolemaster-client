import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';

import { NamedKey } from 'src/app/model/commons';
import { TacticalAction } from 'src/app/model/round';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-dialog-select-action',
  templateUrl: './dialog-select-action.component.html',
  styleUrls: ['./dialog-select-action.component.scss']
})
export class DialogSelectActionComponent implements OnInit {

  action: TacticalAction = {type: 'movement' } as TacticalAction;

  minActionPercent = 1;
  maxActionPercent = 100;

  movementPaces: NamedKey[] = [];
  meleeAttackTypes: NamedKey[] = [];

  @ViewChild(MatTabGroup) matTabGroup!: MatTabGroup;

  constructor(
    private enumService: EnumService
  ) { }

  ngOnInit(): void {
    this.enumService.findMovementPaces().subscribe(result => this.movementPaces = result);
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
  }

  setUp(minActionPercent: number, maxActionPercent: number) {
    this.minActionPercent = minActionPercent;
    this.maxActionPercent = maxActionPercent;
  }

  configureActionType(event: MatTabChangeEvent) {
    switch(event.index) {
      case 0:
        this.action.type = "movement";
        break;
        case 1:
          this.action.type ="melee-attack";
          break;
    }
    console.log("Mat change: ", event);
  }

}
