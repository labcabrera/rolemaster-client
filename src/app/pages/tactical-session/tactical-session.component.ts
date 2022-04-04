import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionsService } from 'src/app/services/tactical-sessions.service';

@Component({
  selector: 'app-tactical-session',
  templateUrl: './tactical-session.component.html',
  styleUrls: ['./tactical-session.component.scss']
})
export class TacticalSessionComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  strategicSession: StrategicSession = {} as StrategicSession;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacticalSessionService: TacticalSessionsService,
    private strategicSessionService: StrategicSessionsService,
    private fb: FormBuilder) {
      this.form = fb.group({
        name: ['', Validators.required],
        description: [''],
      });
      this.form.disable();
    }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.loadTacticalSession(id);
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

  delete() {
    this.tacticalSessionService.delete(this.tacticalSession.id).subscribe(result => {
      this.router.navigateByUrl("/tactical-sessions");
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

  navigateToStrategicSession() {
    this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
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

}
