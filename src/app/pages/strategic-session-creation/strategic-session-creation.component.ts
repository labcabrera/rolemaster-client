import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { SessionCreationRequest } from 'src/app/model/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategic-session-creation',
  templateUrl: './strategic-session-creation.component.html',
  styleUrls: ['./strategic-session-creation.component.scss']
})
export class StrategicSessionCreationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private strategicSessionService: StrategicSessionsService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  createStrategicSession() {
    let request = this.form.value as SessionCreationRequest;
    this.strategicSessionService.createSession(request).subscribe(result => {
      let id = result.id;
      this.router.navigateByUrl("strategic-sessions/detail/" + id);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
