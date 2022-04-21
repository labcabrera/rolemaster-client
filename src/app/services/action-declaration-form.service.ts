import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacticalAction } from '../model/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionDeclarationFormService {

  constructor() { }

  configureMeleeAttackTargets(fb: FormBuilder, actionForm: FormGroup, meleeAttackType: string, meleeAttackMode: string) {
    console.log("Configuring targets. Type: ", meleeAttackType, ", Mode: ", meleeAttackMode);
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
      }
    } else {
      actionForm.removeControl('targets');
    }
  }

  buildMeleeAttackExecution(fb: FormBuilder, form: FormGroup, action: TacticalAction){
    console.log("Building form. Action: ", action);

    form.addControl('rolls', fb.group({
      'main-hand': fb.group({ result: ['', Validators.required]})
    }));

    
    /*
    var result = fb.group({
      type: ['melee-attack'],
      rolls: fb.group({
        'main-hand': fb.group({
          result: ['', Validators.required]
        }),
        //'off-hand': this.fb.control({
        //  result: ['']})
      })
    });
    */
  }

}
