import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { SessionCreationRequest } from 'src/app/model/session';
import { NamedKey, Universe } from 'src/app/model/commons';
import { UniverseService } from 'src/app/services/universe.service';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { M } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-strategic-session-creation',
  templateUrl: './strategic-session-creation.component.html',
  styleUrls: ['./strategic-session-creation.component.scss']
})
export class StrategicSessionCreationComponent implements OnInit {

  form: FormGroup;
  
  user?: User;
  versions: NamedKey[] = [];
  universes: Universe[] = [];

  constructor(
    private strategicSessionService: StrategicSessionsService,
    private universeService: UniverseService,
    private enumService: EnumService,
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      version: ['', Validators.required],
      universeId: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.readVersions();
    this.readUniverses();
    this.readUser();
  }

  createStrategicSession() {
    let request = this.form.value as SessionCreationRequest;
    this.strategicSessionService.create(request).subscribe(result => {
      let id = result.id;
      this.router.navigateByUrl("strategic-sessions/detail/" + id);
    });
  }

  loadUniverse(event: any) {
    this.form.value['universe'] = event.id;
  }

  private readUser() {
    this.userService.findUser().subscribe({
      next: result => {
        this.user = result;
        this.form.patchValue({
          version: this.user.defaultVersion,
          universeId: this.user.defaultUniverseId
        });
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private readVersions() {
    this.enumService.findRolemasterVersions().subscribe({
      next: result => this.versions = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private readUniverses() {
    this.universeService.find().subscribe({
      next: result => this.universes = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
