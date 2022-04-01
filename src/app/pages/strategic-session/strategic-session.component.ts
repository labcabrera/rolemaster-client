import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StrategicSession } from '../../model/session';
import { StrategicSessionsService } from '../../services/strategic-sessions.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './strategic-session.component.html',
  styleUrls: ['./strategic-session.component.css']
})
export class StrategicSessionComponent implements OnInit {

  strategicSession?: StrategicSession;
  form: FormGroup;

  constructor(
    private sessionService: StrategicSessionsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location) {

      this.form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        description: [''],
        authorization: [ [] ],
        metadata: this.fb.group({
          created: [''],
          updated: ['']
        }),
      });
      this.form.disable();
    }

  ngOnInit(): void {
    this.getSession();
  }

  getSession(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.getSession(id).subscribe(c => {
      this.strategicSession = c;
      this.form.setValue(this.strategicSession);
    });
  }

  saveSession() {
    let id = this.strategicSession!.id;
    let request = this.form.value;
    this.sessionService.updateSession(id, request).subscribe(response => {
      this.strategicSession = response;
      this.form.setValue(this.strategicSession);
      this.form.disable();
    });
  }
  
  deleteSession() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.deleteSession(id).subscribe(c => {
      this.router.navigateByUrl("/strategic-sessions");
    }); 
  }
  
  startEdit() {
    this.form.enable();
  }

  cancelEdit() {
    this.form.setValue(this.strategicSession!);
    this.form.disable();
  }

  isEditMode() {
    return this.form.enabled;
  }

  goBack(): void {
    this.location.back();
  }

}
