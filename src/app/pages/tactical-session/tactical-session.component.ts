import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Npc } from 'src/app/model/npc';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { NpcService } from 'src/app/services/npc.service';
import { CharacterService } from 'src/app/services/character-service';

export interface AddCharacterOption {
  id: string;
  name: string;
  isNpc: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-tactical-session',
  templateUrl: './tactical-session.component.html',
  styleUrls: ['./tactical-session.component.scss']
})
export class TacticalSessionComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  strategicSession: StrategicSession = {} as StrategicSession;
  tacticalCharacterContexts: TacticalCharacterContext[] = [];

  form: FormGroup;

  addCharacterOptions: AddCharacterOption[] = [];
  addCharactersFormControl = new FormControl();
  addCharactersFiltered: Observable<AddCharacterOption[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacticalSessionService: TacticalSessionService,
    private strategicSessionService: StrategicSessionsService,
    private characterService: CharacterService,
    private npcService: NpcService,
    private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: [''],
    });
    this.addCharactersFiltered = this.addCharactersFormControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filterStates(name) : this.addCharacterOptions.slice())),
    );
    this.form.disable();
  }

  ngOnInit(): void {
    const tacticalSessionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTacticalSession(tacticalSessionId);
    this.loadTacticalCharacterContexts(tacticalSessionId);
    this.loadAddCharacterOptions();
  }

  loadTacticalSession(tacticalSessionId: string) {
    this.tacticalSessionService.findById(tacticalSessionId).subscribe(result => {
      this.tacticalSession = result;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description
      });
      this.loadStrategicSession(this.tacticalSession.strategicSessionId);
    });
  }

  loadStrategicSession(strategicSessionId: string) {
    this.strategicSessionService.findById(strategicSessionId).subscribe(result => {
      this.strategicSession = result;
      this.form.patchValue({
        strategicSessionName: this.strategicSession.name
      });
    });
  }

  loadTacticalCharacterContexts(tacticalSessionId: string) {
    this.tacticalSessionService.findTacticalCharacterContexts(tacticalSessionId).subscribe(result => {
      this.tacticalCharacterContexts = result;
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

  save() {
    const id = this.tacticalSession.id;
    const update = this.form.value as TacticalSessionUpdate;
    this.tacticalSessionService.update(id, update).subscribe(response => {
      this.tacticalSession = response;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description
      });
      this.form.disable();
    });
  }

  delete() {
    this.tacticalSessionService.delete(this.tacticalSession.id).subscribe(result => {
      this.router.navigateByUrl("/tactical-sessions");
    });
  }

  deleteTacticalCharacterContext(tacticalCharacterContextId: string) {
    this.tacticalSessionService.deleteTacticalCharacterContext(tacticalCharacterContextId).subscribe(e => {
      this.loadTacticalCharacterContexts(this.tacticalSession.id);
    });
  }

  addCharacter() {
    const opt = this.addCharactersFormControl.value as AddCharacterOption;
    if (opt.isNpc) {
      this.tacticalSessionService.addNpc(this.tacticalSession.id, opt.id).subscribe(result => {
        this.tacticalCharacterContexts.push(result);
      });
    } else {
      this.tacticalSessionService.addCharacter(this.tacticalSession.id, opt.id).subscribe(result => {
        this.tacticalCharacterContexts.push(result);
      });
    }
    if(opt.unique) {
      this.addCharactersFormControl.setValue({} as AddCharacterOption);
    }
  }

  displayNpcOption(npc: Npc) {
    return npc && npc.name ? npc.name : '';
  }

  private _filterStates(value: string): AddCharacterOption[] {
    const filterValue = value.toLowerCase();
    return this.addCharacterOptions.filter(value => value.name.toLowerCase().includes(filterValue));
  }

  startEdit() {
    this.form.enable();
  }

  cancelEdit() {
    this.form.get('name')?.setValue(this.tacticalSession.name);
    this.form.get('description')?.setValue(this.tacticalSession.description);
    this.form.disable();
  }

  isEditMode() {
    return this.form.enabled;
  }

  navigateToStrategicSession() {
    this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
  }

  navigateToTacticalView() {
    this.router.navigateByUrl("/tactical?tacticalSessionId=" + this.tacticalSession.id);
  }

}
