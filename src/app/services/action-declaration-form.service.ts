import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { TacticalAction } from '../model/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionDeclarationFormService {

  constructor() { }

  configureMeleeAttackTargets(fb: FormBuilder, actionForm: FormGroup, meleeAttackType: string, meleeAttackMode: string) {
    actionForm.removeControl('targets');
    if (meleeAttackType === 'full') {
      switch (meleeAttackMode) {
        case 'two-weapons':
          actionForm.addControl('targets', fb.group({
            'main-hand': ['', Validators.required],
            'off-hand': ['', Validators.required]
          }));
          break;
        case 'main-hand-weapon':
          actionForm.addControl('targets', fb.group({
            'main-hand': ['', Validators.required]
          }));
          break;
        case 'off-hand-weapon':
          actionForm.addControl('targets', fb.group({
            'off-hand': ['', Validators.required]
          }));
          break;
        case 'special-attack':
          actionForm.addControl('targets', fb.group({
            'main-hand': ['', Validators.required]
          }));
          break;
      }
    } else {
      actionForm.removeControl('targets');
    }

    if (meleeAttackMode === 'special-attack') {
      actionForm.addControl('specialAttack', new FormControl('', Validators.required));
    } else {
      actionForm.removeControl('specialAttack');
    }

  }

  configureMeleeAttackExecution(fb: FormBuilder, form: FormGroup, action: TacticalAction) {

    if (action.rolls) {
      if (action.rolls['main-hand']) {
        form.patchValue({ rolls: { ['main-hand']: { result: action.rolls['main-hand'].result } } });
      }
      if (action.rolls['off-hand']) {
        form.patchValue({ rolls: { ['off-hand']: { result: action.rolls['off-hand'].result } } });
      }
    }
    if (action.targets) {
      if (action.targets['main-hand']) {
        form.patchValue({ targets: { ['main-hand']: action.targets['main-hand'] } })
      }
      if (action.targets['off-hand']) {
        form.patchValue({ targets: { ['off-hand']: action.targets['off-hand'] } })
      }
    }
    if (action.meleeAttackType === 'full') {
      (form.get('targets') as FormGroup).get("main-hand")?.disable();
      (form.get('targets') as FormGroup).get("off-hand")?.disable();
    }
    if (action.meleeAttackMode !== 'two-weapons' && action.meleeAttackMode !== 'off-hand-weapon') {
      (form.get('rolls') as FormGroup).removeControl('off-hand');
      (form.get('facingMap') as FormGroup).removeControl('off-hand');
      (form.get('targets') as FormGroup).removeControl('off-hand');
    }
    if (action.state != 'pending') {
      form.disable();
    }
  }

}
