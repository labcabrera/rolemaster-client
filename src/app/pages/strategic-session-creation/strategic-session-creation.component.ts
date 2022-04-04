import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { SessionCreationRequest } from 'src/app/model/session';
import { Universe } from 'src/app/model/commons';
@Component({
  selector: 'app-strategic-session-creation',
  templateUrl: './strategic-session-creation.component.html',
  styleUrls: ['./strategic-session-creation.component.scss']
})
export class StrategicSessionCreationComponent implements OnInit {

  form: FormGroup;

  universes: Universe[] = [
    {id: 'middle-earth', name: "Middle Earth"},
    {id: 'generic', name: "Generic"}
  ]

  constructor(
    private strategicSessionService: StrategicSessionsService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      universeId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createStrategicSession() {
    let request = this.form.value as SessionCreationRequest;
    this.strategicSessionService.create(request).subscribe(result => {
      let id = result.id;
      this.router.navigateByUrl("strategic-sessions/detail/" + id);
    });
  }

  loadUniverse(event: any) {
    console.log(event);
    this.form.value['universe'] = event.id;
  }

  goBack(): void {
    this.location.back();
  }

}
