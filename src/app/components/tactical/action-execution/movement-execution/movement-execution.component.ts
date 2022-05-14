import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';
import { NamedKey } from 'src/app/model/commons';
import { TacticalSession } from 'src/app/model/session';
import { ActionService } from 'src/app/services/action.service';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-movement-execution',
  templateUrl: './movement-execution.component.html',
  styleUrls: ['./movement-execution.component.scss']
})
export class MovementExecutionComponent implements OnInit {

  @Input() action?: TacticalAction;
  @Input() tacticalSession?: TacticalSession;
  @Input() characters: TacticalCharacter[] = [];

  actionExecutionForm: FormGroup;

  difficulties: NamedKey[] = [];
  combatSituations: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
    this.actionExecutionForm = this.buildActionExecutionForm();
  }

  ngOnInit(): void {
    this.loadDifficulties();
    this.loadCombatSituations();
    this.loadActionExecutionFormData();
  }

  executeMovement(): void {
    if(!this.action) {
      return;
    }
    this.actionService.execute(this.action.id, this.actionExecutionForm.value).subscribe({
      next: result => this.action = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private buildActionExecutionForm(): FormGroup {
    const actionExecutionForm = this.fb.group({
      type: ['movement', Validators.required],
      combatSituation: ['melee-environment', Validators.required],
      difficulty: ['', Validators.required]
    });
    actionExecutionForm.get("difficulty")!.valueChanges.subscribe(selectedValue => {
      if(selectedValue != 'none') {
        actionExecutionForm.addControl('customBonus', new FormControl(''));
        actionExecutionForm.addControl('roll', new FormControl('', Validators.required));
      } else {
        actionExecutionForm.removeControl('customBonus');
        actionExecutionForm.removeControl('roll');
      }
    });
    return actionExecutionForm;
  }

  private loadActionExecutionFormData(): void {
    if(!this.action) {
      return;
    }
    if(this.action.state === "pending") {
      this.actionExecutionForm.patchValue({difficulty: this.getDefaultDifficulty(this.action.pace)});
    } else if(this.action.difficulty) {
      this.actionExecutionForm.patchValue({difficulty: this.action.difficulty});
    }
    if(this.action.roll) {
      this.actionExecutionForm.patchValue({roll: this.action.roll});
    }
    if(this.action.combatSituation) {
      this.actionExecutionForm.patchValue({combatSituation: this.action.combatSituation});
    }
    if(this.action.bonusMap && this.action.bonusMap['custom']) {
      this.actionExecutionForm.patchValue({customBonus: this.action.bonusMap['custom']});
    }
    if(this.action.state === 'resolved') {
      this.actionExecutionForm.disable();
    }
  }

  private loadDifficulties(): void {
    this.enumService.findManeuverDifficulties().subscribe({
      next: results => this.difficulties = results,
      error: error => this.errorService.displayError(error)
    });
  }

  private loadCombatSituations(): void {
    this.enumService.findMovingManeuverCombatSituations().subscribe({
      next: results => this.combatSituations = results,
      error: error => this.errorService.displayError(error)
    });
  }

  private getDefaultDifficulty(pace: string): string {
    var difficulty = "none";
    if(pace === "sprint") {
      difficulty = "easy";
    } else if(pace === "fast-spring") {
      difficulty = "light"
    } else if(pace === "dash") {
      difficulty = "medium";
    }
    return difficulty;
  }

}
