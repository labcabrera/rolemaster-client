import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StrategicSession, TacticalSession } from '../../model/session';
import { StrategicSessionsService } from '../../services/strategic-sessions.service';
import { Universe } from 'src/app/model/commons';
import { UniverseService } from 'src/app/services/universe.service';
import { TacticalSessionService as TacticalSessionService } from 'src/app/services/tactical-session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './strategic-session.component.html',
  styleUrls: ['./strategic-session.component.css']
})
export class StrategicSessionComponent implements OnInit {

  strategicSession?: StrategicSession;
  tacticalSessions: TacticalSession[] = [];
  form: FormGroup;

  universes: Universe[] = [];
  /*{id: 'middle-earth', name: "Middle Earth"},
  {id: 'generic', name: "Generic"}
]*/

  constructor(
    private sessionService: StrategicSessionsService,
    private tacticalSessionService: TacticalSessionService,
    private universeService: UniverseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location) {

    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      universeId: ['', Validators.required],
      description: [''],
      authorization: [[]],
      metadata: this.fb.group({
        created: [{ value: '', disabled: true }],
        updated: ['']
      }),
    });
    this.form.disable();
  }

  ngOnInit(): void {
    this.loadStrategicSession();
    this.loadUniverses();
  }

  loadStrategicSession(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.findById(id).subscribe(response => {
      this.strategicSession = response;
      this.loadTacticalSessions(this.strategicSession.id);
      this.form.setValue(this.strategicSession);
    });
  }
  loadTacticalSessions(strategicSessionId: string) {
    this.tacticalSessionService.findByStrategicSessionId(strategicSessionId).subscribe(response => this.tacticalSessions = response);
  }

  loadUniverses() {
    this.universeService.find().subscribe(response => this.universes = response);
  }

  saveSession() {
    let id = this.strategicSession!.id;
    let request = this.form.value;
    this.sessionService.update(id, request).subscribe(response => {
      this.strategicSession = response;
      this.form.setValue(this.strategicSession);
      this.form.disable();
    });
  }

  deleteSession() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.delete(id).subscribe(c => {
      this.router.navigateByUrl("/strategic-sessions");
    });
  }

  startEdit() {
    this.form.enable();
    this.form.get("metadata")?.disable();
    this.form.get("universeId")?.disable();
  }

  cancelEdit() {
    this.form.setValue(this.strategicSession!);
    this.form.disable();
  }

  isEditMode() {
    return this.form.enabled;
  }

}
