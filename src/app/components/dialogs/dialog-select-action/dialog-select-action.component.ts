import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NamedKey } from 'src/app/model/commons';
import { TacticalAction } from 'src/app/model/actions';
import { EnumService } from 'src/app/services/enum.service';
import { ActionService } from 'src/app/services/action.service';
import { TacticalRound } from 'src/app/model/round';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';

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

  source: TacticalCharacterContext = {} as TacticalCharacterContext;
  characters: TacticalCharacterContext[] = [];
  tacticalSessionId: string = "";

  maxActionPercent = 100;

  movementPaces: NamedKey[] = [];
  //meleeAttackTypes: NamedKey[] = [];
  //meleeAttackModes: NamedKey[] = [];

  actionForm: FormGroup;

  actionPercentMap = new Map<string, number[]>([
    ["snap", [1, 20]],
    ["normal", [1, 80]],
    ["deliberate", [1, 100]],
  ]);

  @ViewChild(MatTabGroup) matTabGroup!: MatTabGroup;

  constructor(
    private actionService: ActionService,
    private actionDeclarationFormService: ActionDeclarationFormService,
    private enumService: EnumService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>
  ) {
    this.actionForm = fb.group({
      type: ['', Validators.required],
      roundId: ['', Validators.required],
      source: ['', Validators.required],
      actionPercent: ['', Validators.required],
      priority: ['', Validators.required],
    });
    this.configureFormGroupMovement();
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('60%', '80%');
    this.enumService.findMovementPaces().subscribe(result => this.movementPaces = result);
  }

  public load(tacticalRound: TacticalRound,
    source: TacticalCharacterContext,
    priority: string,
    characters: TacticalCharacterContext[],
    actions: TacticalAction[]) {

    //TODO read current used percent from character
    this.source = source;
    this.characters = characters;

    var maxPriorityPercent = this.actionPercentMap.get(priority)![1];
    var availablePercent = 100 - this.getUsedActivityPercent(source, actions);
    this.maxActionPercent = Math.min(maxPriorityPercent, availablePercent);

    this.actionForm.patchValue({
      roundId: tacticalRound.id,
      source: source.id,
      actionPercent: this.maxActionPercent,
      priority: priority
    });
  }

  public loadAction(action: TacticalAction) {
    //TODO
    console.log("Not implemented");
  }

  configureActionType(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.configureFormGroupMovement();
        break;
      case 1:
        this.configureFormGroupMeleeAttack();
        break;
      case 2:
        this.configureFormGroupMissileAttack();
        break;
    }
  }

  declareAction() {
    this.actionService.declare(this.actionForm.value).subscribe(result => {
      console.log("Declared action result: ", result);
    });
  }

  private configureFormGroupMovement() {
    this.cleanUpForms(this.actionForm);
    this.actionForm.addControl('pace', this.fb.control(['']));
    this.actionForm.patchValue({
      type: 'movement',
      pace: 'walk'
    });
  }

  private configureFormGroupMeleeAttack() {
    this.cleanUpForms(this.actionForm);

    var meleeAttackMode = 'main-hand-weapon';
    var offHand = this.source.items.filter(e => e.position === 'off-hand');
    if (offHand.length > 0 && offHand[0].type === 'weapon') {
      meleeAttackMode = 'two-weapons';
    }

    this.actionForm.addControl('meleeAttackType', this.fb.control(['', Validators.required]));
    this.actionForm.addControl('meleeAttackMode', this.fb.control(['', Validators.required]));
    this.actionForm.addControl('parry', this.fb.control(['0', Validators.required]));

    this.actionForm.patchValue({
      type: 'melee-attack',
      meleeAttackType: 'full',
      meleeAttackMode: meleeAttackMode,
      parry: 0,
    });
    this.actionDeclarationFormService.configureMeleeAttackTargets(this.fb, this.actionForm, 'full', meleeAttackMode);
  }

  private configureFormGroupMissileAttack() {
    this.cleanUpForms(this.actionForm);
    this.actionForm.addControl('target', this.fb.control([''], Validators.required));
    this.actionForm.addControl('distance', this.fb.control([''], Validators.required));
    this.actionForm.patchValue({
      type: 'missile-attack'
    });
  }

  private cleanUpForms(actionForm: FormGroup) {
    actionForm.removeControl('pace');
    actionForm.removeControl('targets');
    actionForm.removeControl('target');
    actionForm.removeControl('meleeAttackMode');
    actionForm.removeControl('meleeAttackType');
    actionForm.removeControl('parry');
  }

  private getUsedActivityPercent(character: TacticalCharacterContext, actions: TacticalAction[]): number {
    var usedPercent = 0;
    if(actions) {
      var list = actions.filter(e => character.id === e.source);
      console.log("actions: ", list);
      list.forEach(e => {
        usedPercent+= e.actionPercent;
      });
    }
    console.log("total: " + usedPercent);
    return usedPercent;
  }

}
