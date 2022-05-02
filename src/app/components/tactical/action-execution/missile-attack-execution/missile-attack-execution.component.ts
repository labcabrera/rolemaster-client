import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TacticalAction } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';
import { NamedKey } from 'src/app/model/commons';
import { ActionService } from 'src/app/services/action.service';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-missile-attack-execution',
  templateUrl: './missile-attack-execution.component.html',
  styleUrls: ['./missile-attack-execution.component.scss']
})
export class MissileAttackExecutionComponent implements OnInit {

  @Input() action?: TacticalAction;
  @Input() characters: TacticalCharacter[] = [];

  coverTypes: NamedKey[] = [];

  actionExecutionForm: FormGroup;
  criticalExecutionForm?: FormGroup;
  breakageForm?: FormGroup;

  constructor(
    private actionService: ActionService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
    
    this.actionExecutionForm = this.fb.group({
      type: ['missile-attack'],
      roll: this.fb.group({
        result: ['', Validators.required]
      }),
      distance: ['', Validators.required],
      cover: ['none', Validators.required]
    });
  }

  ngOnInit(): void {
    this.enumService.findCoverTypes().subscribe({
      next: results => this.coverTypes = results,
      error: error => this.errorService.displayError(error)
    });
    this.loadActionForm();
  }

  loadActionForm(): void {
    var result = this.action?.rolls && this.action?.rolls['main-hand'] ? this.action?.rolls['main-hand'].result : 0;
    this.actionExecutionForm.patchValue({
      roll: {
        result: result
      },
      distance: this.action!.distance,
      cover: this.action!.cover
    });
    if(this.action?.state != 'pending') {
      this.actionExecutionForm.disable();
    }
    if(this.action?.state === 'pending-breakage-resolution') {
      this.breakageForm = this.createBreakageExecutionForm();
    }
    if(this.action?.state === 'pending-critical-resolution') {
      this.criticalExecutionForm = this.createCriticalExecutionForm();
    }
  }

  getTargetName() {
    return this.characters.filter(e => e.id == this.action!.targets['main-hand'])[0].name;
  }

  executeMissileAttack() {
    this.actionService.execute(this.action!.id, this.actionExecutionForm.value).subscribe({
      next: result => {

      },
      error: error => this.errorService.displayError(error)
    });
  }

  executeBreakage() {
    this.actionService.executeBreakage(this.action!.id, this.breakageForm!.value).subscribe({
      next: action => {
        this.action = action;
        if (this.action.state === 'pending-critical-resolution') {
          //this.criticalExecutionForm = this.createCriticalExecutionForm();
        }
      },
      error: error => this.errorService.displayError(error)
    });
  }

  resolveCriticalAction() {
    this.actionService.executeCritical(this.action!.id, this.criticalExecutionForm!.value).subscribe({
      next: action => {
        this.action = action;
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private createBreakageExecutionForm(): FormGroup {
    const result = this.fb.group({
      rolls: this.fb.group({
        'main-hand': ['1', Validators.required]
      })
    });
    return result;
  }

  getCriticalRollKeys(): string[] {
    const count = this.getCriticalResultCount();
    const result = [];
    for (var i = 0; i < count; i++) {
      result.push('Critical roll ' + (i + 1));
    }
    return result;
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

  private getCriticalResultCount(): number {
    var count = 0;
    if (this.action!.criticalResults['main-hand']) {
      count += this.action!.criticalResults['main-hand'].length;
    }
    if (this.action!.criticalResults['off-hand']) {
      count += this.action!.criticalResults['off-hand'].length;
    }
    return count;
  }

}
