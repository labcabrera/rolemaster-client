import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { AttackCriticalExecution, FumbleExecution, TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { EnumService } from 'src/app/services/enum.service';
import { ActionService } from 'src/app/services/action.service';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-melee-attack-execution',
  templateUrl: './melee-attack-execution.component.html',
  styleUrls: ['./melee-attack-execution.component.scss']
})
export class MeleeAttackExecutionComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() action: TacticalAction = {} as TacticalAction;

  //@Input() actionExecution: TacticalActionExecution = {} as TacticalActionExecution;
  @Input() tacticalSession: TacticalSession = {} as TacticalSession;
  @Input() characters: TacticalCharacterContext[] = [];
  //@Input() criticalExecution: AttackCriticalExecution = { roll: 0 };
  //@Input() fumbleExecution: FumbleExecution = { roll: 0 };

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
      }),
      targets: fb.group({
        'main-hand': fb.control('', Validators.required),
        'off-hand': fb.control('', Validators.required),
      })
    });
  }


  ngOnInit(): void {
    this.enumService.findMeleeAttackFacingList().subscribe(result => this.meleeAttackFacingValues = result);
    this.loadAvailableTargets();
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    this.actionDeclarationFormService.configureMeleeAttackExecution(this.fb, this.actionExecutionForm, this.action);
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

  displayOffHandTarget(): boolean {
    var x = (this.actionExecutionForm.get('targets') as FormGroup).get('off-hand') != null;
    return x;
  }

}
