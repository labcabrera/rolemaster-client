import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { TacticalAction } from 'src/app/model/actions';
import { EnumService } from 'src/app/services/enum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NamedKey } from 'src/app/model/commons';
import { TacticalCharacter } from 'src/app/model/character-context';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';
import { ActionService } from 'src/app/services/action.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-action-declaration-melee-attack',
  templateUrl: './action-declaration-melee-attack.component.html',
  styleUrls: ['./action-declaration-melee-attack.component.scss']
})
export class ActionDeclarationMeleeAttackComponent implements OnInit, AfterContentInit {

  //@Input() actionForm: FormGroup = {} as FormGroup;
  @Input() roundId: string = "";
  @Input() priority: string = "";
  @Input() character: TacticalCharacter = {} as TacticalCharacter;
  @Input() maxActionPercent: number = 100;
  @Input() characters: TacticalCharacter[] = [];

  @Output() onActionCreation = new EventEmitter<string>();

  actionForm: FormGroup | undefined;
  meleeAttackTypes: NamedKey[] = [];
  meleeAttackModes: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private actionDeclarationFormService: ActionDeclarationFormService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) { 
  }
  
  ngOnInit(): void {
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
    this.enumService.findMeleeAttackModes().subscribe(result => this.meleeAttackModes = result);
  }
  
  ngAfterContentInit(): void {
    this.actionForm = this.fb.group({
      type: ['melee-attack', Validators.required],
      priority: [this.priority, Validators.required],
      roundId: [this.roundId, Validators.required],
      source: [this.character.id, Validators.required],
      actionPercent: [this.maxActionPercent, Validators.required],
      meleeAttackType: ['full', Validators.required],
      meleeAttackMode: [this.getDefaultMeleeAttackMode(), Validators.required],
      parry: [0],
    });
    this.actionDeclarationFormService.configureMeleeAttackTargets(
      this.fb, 
      this.actionForm!,
      this.actionForm!.value['meleeAttackType'],
      this.actionForm!.value['meleeAttackMode']);
  }

  isAttackModeDisabled(value: string) {
    if((value === 'two-weapons' || value === 'off-hand-weapon') && !this.hasTwoWeapons()) {
      return true;
    }
    if(value === 'parry') {
      //TODO only can parry when stun/must-parry debuff
      return true;
    }
    return false;
  }

  onMeleeAttackTypeChange(event: any) {
    this.actionDeclarationFormService.configureMeleeAttackTargets(this.fb, this.actionForm!, event.value, this.actionForm!.value.meleeAttackMode);
  }

  onMeleeAttackModeChange(event: any) {
    this.actionDeclarationFormService.configureMeleeAttackTargets(this.fb, this.actionForm!, this.actionForm!.value.meleeAttackType, event.value);
  }

  declareMeleeAttack() {
    this.actionService.declare(this.actionForm!.value).subscribe({
      next: result => this.onActionCreation.emit("Declared melee attack."),
      error: error => this.errorService.displayError(error)
    })
  }

  getDefaultMeleeAttackMode() {
    return this.hasTwoWeapons() ? "two-weapons" : "main-hand-weapon";
  }

  hasTwoWeapons() {
    var offHand = this.character.items.filter(e => e.position === 'off-hand');
    return offHand.length > 0 && offHand[0].type === 'weapon';
  }

}
