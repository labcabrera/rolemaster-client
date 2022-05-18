import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacticalAction } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { ErrorService } from 'src/app/services/error.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';

@Component({
  selector: 'app-dialog-initiative-declaration',
  templateUrl: './dialog-initiative-declaration.component.html',
  styleUrls: ['./dialog-initiative-declaration.component.scss']
})
export class DialogInitiativeDeclarationComponent {

  action?: TacticalAction;
  character?: TacticalCharacter;
  tacticalSession?: TacticalSession;

  initiativeForm: FormGroup;

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) {
    this.initiativeForm = this.fb.group({
      characterId: ['', Validators.required],
      initiativeRoll: ['', Validators.required],
    });
  }

  load(tacticalSession: TacticalSession, character: TacticalCharacter, action: TacticalAction): void {
    this.tacticalSession = tacticalSession;
    this.character = character;
    this.action = action;
    this.initiativeForm.patchValue({
      characterId: character.id
    });
  }

  declareInitiative(): void {
    const request = { characters: [ this.initiativeForm.value] };
    this.tacticalSessionService.declareInitiative(this.tacticalSession!.id, request).subscribe({
      error: error => this.errorService.displayError(error)
    });
  }

}
