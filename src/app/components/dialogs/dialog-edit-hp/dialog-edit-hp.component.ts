import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TacticalCharacter } from 'src/app/model/character-context';
import { ErrorService } from 'src/app/services/error.service';
import { TacticalCharacterService } from 'src/app/services/tactical-character.service';

@Component({
  selector: 'app-dialog-edit-hp',
  templateUrl: './dialog-edit-hp.component.html',
  styleUrls: ['./dialog-edit-hp.component.scss']
})
export class DialogEditHpComponent {

  character?: TacticalCharacter;
  currentHpControl = new FormControl();

  constructor(
    private tacticalCharacterService: TacticalCharacterService,
    private errorService: ErrorService
  ) { }

  loadCharacter(character: TacticalCharacter) {
    this.character = character;
    this.currentHpControl.setValue(this.character.hp.current);
  }

  updateHP() {
    const request = { hp: this.currentHpControl.value };
    this.tacticalCharacterService.update(this.character!.id, request).subscribe({
      next: result => {
        this.character!.hp.current = result.hp.current;
        this.character!.hp.percent = result.hp.percent;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
