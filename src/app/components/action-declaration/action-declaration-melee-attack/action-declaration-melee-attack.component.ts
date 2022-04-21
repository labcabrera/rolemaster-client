import { Component, OnInit, Input } from '@angular/core';
import { TacticalAction } from 'src/app/model/actions';
import { EnumService } from 'src/app/services/enum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NamedKey } from 'src/app/model/commons';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';

@Component({
  selector: 'app-action-declaration-melee-attack',
  templateUrl: './action-declaration-melee-attack.component.html',
  styleUrls: ['./action-declaration-melee-attack.component.scss']
})
export class ActionDeclarationMeleeAttackComponent implements OnInit {

  @Input() actionForm: FormGroup = {} as FormGroup;
  @Input() character: TacticalCharacterContext = {} as TacticalCharacterContext;
  @Input() maxActionPercent: number = 100;
  @Input() characters: TacticalCharacterContext[] = [];

  hasTwoWeapons: boolean = false;

  meleeAttackTypes: NamedKey[] = [];
  meleeAttackModes: NamedKey[] = [];

  constructor(
    private actionDeclarationFormService: ActionDeclarationFormService,
    private enumService: EnumService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
    this.enumService.findMeleeAttackModes().subscribe(result => this.meleeAttackModes = result);
    this.loadHasTwoWeapons();
  }

  isAttackModeDisabled(value: string) {
    if((value === 'two-weapons' || value === 'off-hand-weapon') && !this.hasTwoWeapons) {
      return true;
    }
    if(value === 'parry') {
      //TODO only can parry when stun/must-parry debuff
      return true;
    }
    return false;
  }

  onMeleeAttackTypeChange(event: any) {
    this.actionDeclarationFormService.configureMeleeAttackTargets(this.fb, this.actionForm, event.value, this.actionForm.value.meleeAttackMode);
  }

  onMeleeAttackModeChange(event: any) {
    this.actionDeclarationFormService.configureMeleeAttackTargets(this.fb, this.actionForm, this.actionForm.value.meleeAttackType, event.value);
  }

  private loadHasTwoWeapons() {
    var offHand = this.character.items.filter(e => e.position === 'off-hand');
    this.hasTwoWeapons = offHand.length > 0 && offHand[0].type === 'weapon';
  }

}
