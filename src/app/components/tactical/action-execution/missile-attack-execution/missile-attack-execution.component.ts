import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private actionService: ActionService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
    this.actionExecutionForm = this.fb.group({
      type: ['missile-attack'],
      roll: this.fb.group({
        result: ['']
      }),
      distance: ['', Validators.required],
      cover: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.enumService.findCoverTypes().subscribe({
      next: results => this.coverTypes = results,
      error: error => this.errorService.displayError(error)
    })
  }

}
