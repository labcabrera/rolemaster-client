import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CharacterService } from 'src/app/services/character-service';
import { Npc } from 'src/app/model/npc';
import { TacticalCharacter } from 'src/app/model/character-context';
import { NpcService } from 'src/app/services/npc.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ErrorService } from 'src/app/services/error.service';
import { TacticalSession } from 'src/app/model/session';

export interface AddCharacterOption {
  id: string;
  name: string;
  isNpc: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-tactical-session-character-management',
  templateUrl: './tactical-session-character-management.component.html',
  styleUrls: ['./tactical-session-character-management.component.scss']
})
export class TacticalSessionCharacterManagementComponent implements OnInit {

  @Input() tacticalSession?: TacticalSession;

  addCharactersFormControl = new FormControl();
  addCharacterOptions: AddCharacterOption[] = [];
  addCharactersFiltered: Observable<AddCharacterOption[]>;
  tacticalCharacters: TacticalCharacter[] = [];

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private npcService: NpcService,
    private characterService: CharacterService,
    private errorService: ErrorService
  ) {
    this.addCharactersFiltered = this.addCharactersFormControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filterStates(name) : this.addCharacterOptions.slice())),
    );
  }

  ngOnInit(): void {
    this.loadTacticalCharacterContexts();
    this.loadAddCharacterOptions();
  }

  loadTacticalCharacterContexts() {
    if (!this.tacticalSession) {
      console.log("Undefined tactical session");
      return;
    }
    console.log("Reading characters from session ", this.tacticalSession.id);
    this.tacticalSessionService.findTacticalCharacterContexts(this.tacticalSession.id).subscribe(result => {
      this.tacticalCharacters = result;
    });
  }

  addCharacter() {
    const opt = this.addCharactersFormControl.value as AddCharacterOption;
    if (opt.isNpc) {
      this.tacticalSessionService.addNpc(this.tacticalSession!.id, opt.id).subscribe(result => {
        this.tacticalCharacters.push(result);
      });
    } else {
      this.tacticalSessionService.addCharacter(this.tacticalSession!.id, opt.id).subscribe(result => {
        this.tacticalCharacters.push(result);
      });
    }
    if (opt.unique) {
      this.addCharactersFormControl.setValue({} as AddCharacterOption);
    }
  }

  deleteTacticalCharacterContext(tacticalCharacterContextId: string) {
    this.tacticalSessionService.deleteTacticalCharacterContext(tacticalCharacterContextId).subscribe({
      next: results => this.loadTacticalCharacterContexts(),
      error: error => this.errorService.displayError(error)
    });
  }

  loadAddCharacterOptions() {
    this.npcService.find().subscribe(result => {
      for (let npc of result) {
        const option: AddCharacterOption = {
          id: npc.id,
          name: npc.name,
          isNpc: true,
          unique: npc.unique
        }
        this.addCharacterOptions.push(option);
      }
    });
    this.characterService.getCharacters().subscribe(result => {
      for (let character of result) {
        const option: AddCharacterOption = {
          id: character.id,
          name: character.name,
          isNpc: false,
          unique: true
        }
        this.addCharacterOptions.push(option);
      }
    });
  }

  private _filterStates(value: string): AddCharacterOption[] {
    const filterValue = value.toLowerCase();
    return this.addCharacterOptions.filter(value => value.name.toLowerCase().includes(filterValue));
  }

  displayNpcOption(npc: Npc) {
    return npc && npc.name ? npc.name : '';
  }

}
