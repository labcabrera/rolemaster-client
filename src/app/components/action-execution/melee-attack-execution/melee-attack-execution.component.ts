import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { AttackCriticalExecution, FumbleExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { EnumService } from 'src/app/services/enum.service';
import { ActionService } from 'src/app/services/action.service';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';

@Component({
  selector: 'app-melee-attack-execution',
  templateUrl: './melee-attack-execution.component.html',
  styleUrls: ['./melee-attack-execution.component.scss']
})
export class MeleeAttackExecutionComponent implements OnInit, AfterViewInit {

  @Input() action: TacticalAction = {} as TacticalAction;
  @Input() actionExecution: TacticalActionExecution = {} as TacticalActionExecution;
  @Input() tacticalSession: TacticalSession = {} as TacticalSession;
  @Input() characters: TacticalCharacterContext[] = [];
  @Input() criticalExecution: AttackCriticalExecution = { roll: 0 };
  @Input() fumbleExecution: FumbleExecution = { roll: 0 };

  actionExecutionForm: FormGroup;

  meleeAttackFacingValues: NamedKey[] = [];
  availableTargets: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private actionDeclarationFormService: ActionDeclarationFormService,
    private enumService: EnumService,
    private fb: FormBuilder) {
    this.actionExecutionForm = fb.group({
      type: ['melee-attack'],
      rolls: fb.group({
        'main-hand': fb.group({ result: ['', Validators.required] }),
        'off-hand': fb.group({ result: ['', Validators.required] }),
      }),
      facingMap: fb.group({
        'main-hand': fb.control('normal'),
        'off-hand': fb.control('normal'),
      })
    });
  }

  ngOnInit(): void {
    this.enumService.findMeleeAttackFacingList().subscribe(result => this.meleeAttackFacingValues = result);
    this.loadAvailableTargets();
  }

  ngAfterViewInit(): void {
    console.log("After view init: ", this.action);
    this.actionDeclarationFormService.buildMeleeAttackExecution(this.fb, this.actionExecutionForm, this.action);

    if (this.action.rolls) {
      if (this.action.rolls['main-hand']) {
        this.actionExecutionForm.patchValue({
          rolls: {
            ['main-hand']: {
              result: this.action.rolls['main-hand'].result
            }
          }
        });
      }
      if (this.action.rolls['off-hand']) {
        this.actionExecutionForm.patchValue({
          rolls: {
            ['off-hand']: {
              result: this.action.rolls['off-hand'].result
            }
          }
        });
      }
    }
  }

  executeMeleeAttackAction() {
    this.actionService.execute(this.action.id, this.actionExecutionForm!.value).subscribe(action => {
      this.action = action;
    });
  }

  loadAvailableTargets() {
    var result: NamedKey[] = [];
    this.characters.filter(e => e.id != this.action.source && e.hp.current > 0)
      .forEach(function (character) {
        result.push({ key: character.id, name: character.name });
      });
    this.availableTargets = result;
  }

  getCharacterName(characterId: string) {
    return this.characters.filter(e => e.id == characterId)[0].name;
  }

}
