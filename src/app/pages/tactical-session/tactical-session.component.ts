import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TacticalCharacterContext } from 'src/app/model/character-context';

import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';

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
  formAddNpc: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacticalSessionService: TacticalSessionService,
    private strategicSessionService: StrategicSessionsService,
    private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: [''],
    });
    this.formAddNpc = fb.group({
      npcId: ['ork-figther-mele-i', Validators.required]
    });
    this.form.disable();
  }

  ngOnInit(): void {
    const tacticalSessionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTacticalSession(tacticalSessionId);
    this.loadTacticalCharacterContexts(tacticalSessionId);
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

  addNpc() {
    var npcId = this.formAddNpc.value["npcId"];
    this.tacticalSessionService.addNpc(this.tacticalSession.id, npcId).subscribe(result => {
      this.tacticalCharacterContexts.push(result);
    });
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
