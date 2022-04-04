import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StrategicSession, TacticalSession } from 'src/app/model/session';
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
    }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.tacticalSessionService.findTacticalSessionById(id).subscribe(result => {
      this.tacticalSession = result;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description
      });
      this.loadStrategicSession(this.tacticalSession.strategicSessionId);
    });
  }

  loadStrategicSession(id: string) {
    this.strategicSessionService.getSession(id).subscribe(result => {
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

  navigateToStrategicSession() {
    this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
  }

}
