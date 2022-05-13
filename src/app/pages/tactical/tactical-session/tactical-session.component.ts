import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { NamedKey } from 'src/app/model/commons';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';
import { runInThisContext } from 'vm';

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
      scale: [''],
      terrain: [''],
      temperature: [''],
      exhaustionMultiplier: [1],
      description: ['']
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
    this.tacticalSessionService.findById(tacticalSessionId).subscribe({
      next: result => {
        this.tacticalSession = result;
        this.updateForm(this.tacticalSession);
        this.loadStrategicSession(this.tacticalSession.strategicSessionId);
      },
      error: error => this.errorService.displayError(error)
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
        this.updateForm(this.tacticalSession);
        this.form.disable();
      },
      error: error => this.errorService.displayError(error)
    });
  }

  updateForm(tacticalSession: TacticalSession) {
    this.form.patchValue({
      name: tacticalSession.name,
      scale: tacticalSession.scale,
      terrain: tacticalSession.terrain,
      temperature: tacticalSession.temperature,
      exhaustionMultiplier: tacticalSession.exhaustionMultiplier,
      description: tacticalSession.description
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
