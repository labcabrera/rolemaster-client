import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TacticalCharacter } from 'src/app/model/character-context';
import { TacticalAction } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { EnumService } from 'src/app/services/enum.service';
import { ActionService } from 'src/app/services/action.service';
import { ActionDeclarationFormService } from 'src/app/services/action-declaration-form.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-melee-attack-execution',
  templateUrl: './melee-attack-execution.component.html',
  styleUrls: ['./melee-attack-execution.component.scss']
})
export class MeleeAttackExecutionComponent implements OnInit, AfterContentInit {

  @Input() action: TacticalAction = {} as TacticalAction;
  @Input() tacticalSession: TacticalSession = {} as TacticalSession;
  @Input() characters: TacticalCharacter[] = [];

  actionExecutionForm: FormGroup;
  criticalExecutionForm: FormGroup | undefined;
  breakageExecutionForm: FormGroup | undefined;

  meleeAttackFacingValues: NamedKey[] = [];
  availableTargets: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private actionDeclarationFormService: ActionDeclarationFormService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {

    this.actionExecutionForm = this.createActionExecutionForm();
    this.createActionExecutionForm();
  }

  ngOnInit(): void {
    this.enumService.findMeleeAttackFacingList().subscribe(result => this.meleeAttackFacingValues = result);
    this.loadAvailableTargets();
  }

  ngAfterContentInit(): void {
    this.actionDeclarationFormService.configureMeleeAttackExecution(this.fb, this.actionExecutionForm, this.action);
    if (this.action.state === 'pending-critical-resolution') {
      this.criticalExecutionForm = this.createCriticalExecutionForm();
    }
    if (this.action.state === 'pending-breakage-resolution') {
      this.breakageExecutionForm = this.createBreakageExecutionForm();
    }
  }

  resolveMeleeAttackAction() {
    if (this.action.meleeAttackType == 'full') {
      this.actionExecutionForm.value['targets'] = {};
    }
    this.actionService.execute(this.action.id, this.actionExecutionForm.value).subscribe({
      next: action => {
        this.action = action;
        if (this.action.state === 'pending-critical-resolution') {
          this.criticalExecutionForm = this.createCriticalExecutionForm();
        }
        if(this.action.state === 'pending-breakage-resolution') {
          this.breakageExecutionForm = this.createBreakageExecutionForm();
        }
      },
      error: error => this.errorService.displayError(error)
    });
  }

  resolveCriticalAction() {
    this.actionService.executeCritical(this.action.id, this.criticalExecutionForm!.value).subscribe({
      next: action => {
        this.action = action;
      },
      error: error => this.errorService.displayError(error)
    });
  }

  resolveBreakageAction() {
    this.actionService.executeBreakage(this.action.id, this.breakageExecutionForm!.value).subscribe({
      next: action => {
        this.action = action;
        if (this.action.state === 'pending-critical-resolution') {
          this.criticalExecutionForm = this.createCriticalExecutionForm();
        }
      },
      error: error => this.errorService.displayError(error)
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
    return (this.actionExecutionForm.get('targets') as FormGroup).get('off-hand') != null;
  }

  getCriticalRollKeys(): string[] {
    const count = this.getCriticalResultCount();
    const result = [];
    for (var i = 0; i < count; i++) {
      result.push('Critical roll ' + (i + 1));
    }
    return result;
  }

  private createActionExecutionForm(): FormGroup {
    return this.fb.group({
      type: ['melee-attack'],
      rolls: this.fb.group({
        'main-hand': this.fb.group({ result: ['', Validators.required] }),
        'off-hand': this.fb.group({ result: ['', Validators.required] }),
      }),
      facingMap: this.fb.group({
        'main-hand': this.fb.control('normal'),
        'off-hand': this.fb.control('normal'),
      }),
      targets: this.fb.group({
        'main-hand': this.fb.control('', Validators.required),
        'off-hand': this.fb.control('', Validators.required),
      })
    });
  }

  private createCriticalExecutionForm(): FormGroup {
    const count = this.getCriticalResultCount();
    const fgRolls: FormGroup = new FormGroup({});
    const fgRoot: FormGroup = new FormGroup({});
    const group: any = {};
    for (var i = 0; i < count; i++) {
      var fc: FormControl = new FormControl('', Validators.required);
      fgRolls.addControl('Critical roll ' + (i + 1), fc);
    }
    fgRoot.addControl('rolls', fgRolls);
    return fgRoot;
  }

  private createBreakageExecutionForm(): FormGroup {
    return this.fb.group({
      rolls: this.fb.group({
        'main-hand': ['1', Validators.required]
      })
    });
  }

  private getCriticalResultCount(): number {
    var count = 0;
    if (this.action.criticalResults['main-hand']) {
      count += this.action.criticalResults['main-hand'].length;
    }
    if (this.action.criticalResults['off-hand']) {
      count += this.action.criticalResults['off-hand'].length;
    }
    return count;
  }

}
