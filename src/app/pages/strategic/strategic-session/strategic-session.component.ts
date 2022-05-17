import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StrategicSession, TacticalSession } from '../../../model/session';
import { StrategicSessionsService } from '../../../services/strategic-sessions.service';
import { NamedKey, Universe } from 'src/app/model/commons';
import { UniverseService } from 'src/app/services/universe.service';
import { TacticalSessionService as TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ErrorService } from 'src/app/services/error.service';
import { MatTableDataSource } from '@angular/material/table';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './strategic-session.component.html',
  styleUrls: ['./strategic-session.component.css']
})
export class StrategicSessionComponent implements OnInit {

  form: FormGroup;
  strategicSession?: StrategicSession;
  tacticalSessions: TacticalSession[] = [];
  versions: NamedKey[] = [];
  universes: Universe[] = [];
  tacticalSessionDataSource = new MatTableDataSource<TacticalSession>();

  constructor(
    private sessionService: StrategicSessionsService,
    private tacticalSessionService: TacticalSessionService,
    private universeService: UniverseService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      version: ['', Validators.required],
      universeId: ['', Validators.required],
      description: ['']
    });
    this.form.disable();
  }

  ngOnInit(): void {
    this.readVersions();
    this.readUniverses();
    this.readStrategicSession();
  }

  saveSession() {
    let id = this.strategicSession!.id;
    let request = this.form.value;
    this.sessionService.update(id, request).subscribe(response => {
      this.strategicSession = response;
      this.updateFormData(this.strategicSession);
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
    this.form.get("version")?.disable();
  }

  cancelEdit() {
    this.updateFormData(this.strategicSession!);
    this.form.disable();
  }

  isEditMode() {
    return this.form.enabled;
  }

  private readUniverses(): void {
    this.universeService.find().subscribe({
      next: response => this.universes = response,
      error: error => this.errorService.displayError(error)
    });
  }

  private readVersions(): void {
    this.enumService.findRolemasterVersions().subscribe({
      next: response => this.versions = response,
      error: error => this.errorService.displayError(error)
    });
  }

  private readStrategicSession(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.findById(id).subscribe({
      next: response => {
        this.strategicSession = response;
        this.updateFormData(this.strategicSession);
        this.loadTacticalSessions(this.strategicSession.id);
      },
      error: error => this.errorService.displayError(error)
    }
    );
  }

  private loadTacticalSessions(strategicSessionId: string): void {
    this.tacticalSessionService.findByStrategicSessionId(strategicSessionId).subscribe({
      next: response => {
        this.tacticalSessions = response;
        this.tacticalSessionDataSource.data = this.tacticalSessions;
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private updateFormData(strategicSession: StrategicSession): void {
    this.form.patchValue({
      name: strategicSession.name,
      version: strategicSession.version,
      description: strategicSession.description,
      universeId: strategicSession.universeId
    });
  }

}
