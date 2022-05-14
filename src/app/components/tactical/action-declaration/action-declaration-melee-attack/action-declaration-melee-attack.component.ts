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

  actionForm: FormGroup | undefined;

  @Input() roundId: string = "";
  @Input() priority: string = "";
  @Input() character: TacticalCharacter = {} as TacticalCharacter;
  @Input() maxActionPercent: number = 100;
  @Input() characters: TacticalCharacter[] = [];

  @Output() onActionCreation = new EventEmitter<string>();

  meleeAttackTypes: NamedKey[] = [];
  meleeAttackModes: NamedKey[] = [];

  meleeAttackTypeDescriptions = new Map<string, string>([
    ["full", "The attacker’s OB receives a +10 modification, but the target of the attack must be declared during the Action Declaration Phase. Any movement must be declared as a separate action."],
    ["press-and-melee", "The target of the attack must be declared during the Action Declaration Phase and the target must be adjacent at that time. If the target attempts to move away before the attack is resolved, the attacker may attempt to move after him. Such movement only results in half the normal OB modification for less than 100% activity used to attack."],
    ["react-and-melee", "The attacker’s OB receives a -10 modification, but the target of the attack need not be declared during the Action Declaration Phase. As an action in any of the three phases (snap, normal, or deliberate), the attacker can attempt to move to and attack anyone within 50'. If he has not done so by the end of the round, he may move up to 50% of his normal movement. Apply the normal OB modifications for less than 100% activity used to attack."]
  ]);

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
    if ((value === 'two-weapons' || value === 'off-hand-weapon') && !this.hasTwoWeapons()) {
      return true;
    }
    if (value === 'parry') {
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

  getTargets() {
    return this.characters.filter(e => e.id != this.character.id);
  }

  hasTwoWeapons() {
    var offHand = this.character.items.filter(e => e.position === 'off-hand');
    return offHand.length > 0 && offHand[0].type === 'weapon';
  }

  enabledAttackTarget(type: string): boolean {
    if(!this.actionForm) {
      return false;
    }
    const targets = this.actionForm.controls['targets'] as FormGroup;
    return targets.controls[type] != null;
  }

}
