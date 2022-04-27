import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Npc } from 'src/app/model/npc';
import { TacticalCharacter } from 'src/app/model/character-context';
import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { NamedKey } from 'src/app/model/commons';
import { NpcService } from 'src/app/services/npc.service';
import { CharacterService } from 'src/app/services/character-service';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-tactical-session',
  templateUrl: './tactical-session.component.html',
  styleUrls: ['./tactical-session.component.scss']
})
export class TacticalSessionComponent implements OnInit {

  tacticalSession?: TacticalSession;
  strategicSession: StrategicSession = {} as StrategicSession;
  form: FormGroup;

  terrains: NamedKey[] = [];
  temperatures: NamedKey[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacticalSessionService: TacticalSessionService,
    private strategicSessionService: StrategicSessionsService,   
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: [''],
      terrain: [''],
      temperature: [''],
      exhaustionMultiplier: [1]
    });
    this.form.disable();
  }

  ngOnInit(): void {
    const tacticalSessionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTacticalSession(tacticalSessionId);
    this.enumService.findTerrains().subscribe(result => this.terrains = result);
    this.enumService.findTemperatures().subscribe(result => this.temperatures = result);
  }

  loadTacticalSession(tacticalSessionId: string) {
    this.tacticalSessionService.findById(tacticalSessionId).subscribe(result => {
      this.tacticalSession = result;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description,
        terrain: this.tacticalSession.terrain,
        temperature: this.tacticalSession.temperature,
        exhaustionMultiplier: this.tacticalSession.exhaustionMultiplier
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

  save() {
    const id = this.tacticalSession!.id;
    const update = this.form.value as TacticalSessionUpdate;
    this.tacticalSessionService.update(id, update).subscribe({
      next: response => {
        this.tacticalSession = response;
        this.form.patchValue({
          name: this.tacticalSession.name,
          description: this.tacticalSession.description
        });
        this.form.disable();
      },
      error: error => this.errorService.displayError(error)
    });
  }

  delete() {
    this.tacticalSessionService.delete(this.tacticalSession!.id).subscribe(result => {
      this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
    });
  }

  startEdit() {
    this.form.enable();
  }

  cancelEdit() {
    this.form.get('name')?.setValue(this.tacticalSession!.name);
    this.form.get('description')?.setValue(this.tacticalSession!.description);
    this.form.disable();
  }

  isEditMode() {
    return this.form.enabled;
  }

  navigateToStrategicSession() {
    this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
  }

  navigateToTacticalView() {
    this.router.navigateByUrl("/tactical?tacticalSessionId=" + this.tacticalSession!.id);
  }

}
