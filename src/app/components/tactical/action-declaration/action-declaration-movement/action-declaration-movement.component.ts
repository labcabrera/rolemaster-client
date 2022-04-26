import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TacticalCharacter } from 'src/app/model/character-context';
import { ActionService } from 'src/app/services/action.service';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-action-declaration-movement',
  templateUrl: './action-declaration-movement.component.html',
  styleUrls: ['./action-declaration-movement.component.scss']
})
export class ActionDeclarationMovementComponent implements OnInit, AfterContentInit {

  @Input() character: TacticalCharacter = {} as TacticalCharacter;
  @Input() roundId: string = "";
  @Input() priority: string = "";
  @Input() maxActionPercent: number = 0;
  @Input() characters: TacticalCharacter[] = [];

  @Output() onActionCreation = new EventEmitter<string>();

  actionForm: FormGroup;

  movementPaces: NamedKey[] = [];

  constructor(
    private actionService: ActionService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) {
    this.actionForm = this.fb.group({
      type: ['movement', Validators.required],
      priority: ['', Validators.required],
      roundId: ['', Validators.required],
      source: ['', Validators.required],
      actionPercent: ['', Validators.required],
      pace: ['walk', Validators.required]
    });
  }

  ngOnInit(): void {
    this.enumService.findMovementPaces().subscribe({
      next: result => this.movementPaces = result,
      error: error => this.errorService.displayError(error)
    });
  }

  ngAfterContentInit(): void {
    this.actionForm.patchValue({
      priority: this.priority,
      roundId: this.roundId,
      actionPercent: this.maxActionPercent,
      source: this.character.id
    });
  }

  declareMovement() {
    this.actionService.declare(this.actionForm.value).subscribe({
      next: result => this.onActionCreation.emit("Declared movement."),
      error: error => this.errorService.displayError(error)
    });
  }

}
