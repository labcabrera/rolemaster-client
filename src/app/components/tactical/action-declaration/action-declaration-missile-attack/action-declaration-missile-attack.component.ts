import { Component, OnInit, Input, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TacticalCharacter } from 'src/app/model/character-context';
import { ActionService } from 'src/app/services/action.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-action-declaration-missile-attack',
  templateUrl: './action-declaration-missile-attack.component.html',
  styleUrls: ['./action-declaration-missile-attack.component.scss']
})
export class ActionDeclarationMissileAttackComponent implements OnInit, AfterContentInit {

  @Input() character?: TacticalCharacter;
  @Input() roundId: string = "";
  @Input() priority: string = "";
  @Input() maxActionPercent: number = 0;
  @Input() characters: TacticalCharacter[] = [];

  @Output() onActionCreation = new EventEmitter<string>();

  missileDeclarationForm: FormGroup;

  constructor(
    private actionService: ActionService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
    this.missileDeclarationForm = this.fb.group({
      type: ['missile-attack', Validators.required],
      priority: ['', Validators.required],
      roundId: ['', Validators.required],
      source: ['', Validators.required],
      actionPercent: ['', Validators.required],
      target: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
    this.missileDeclarationForm.patchValue({
      priority: this.priority,
      roundId: this.roundId,
      actionPercent: this.maxActionPercent,
      source: this.character!.id
    });
  }

  getValidTargets() {
    return this.characters.filter(e => this.character! && this.character.id != e.id);
  }

  declareMissileAttack() {
    this.actionService.declare(this.missileDeclarationForm.value).subscribe({
      next: result => {
        this.onActionCreation.emit("Declared missile attack.");
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
