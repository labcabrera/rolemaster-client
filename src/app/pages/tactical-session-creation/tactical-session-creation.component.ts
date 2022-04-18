import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StrategicSession, TacticalSessionCreation } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { EnumService } from 'src/app/services/enum.service';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-tactical-session-creation',
  templateUrl: './tactical-session-creation.component.html',
  styleUrls: ['./tactical-session-creation.component.scss']
})
export class TacticalSessionCreationComponent implements OnInit {

  strategicSession: StrategicSession = {} as StrategicSession;

  form: FormGroup;

  terrains: NamedKey[] = [];
  temperatures: NamedKey[] = [];

  constructor(
    private strategicSessionService: StrategicSessionsService,
    private tacticalSessionService: TacticalSessionService,
    private enumService: EnumService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.form = this.fb.group({
      strategicSessionId: [''],
      name: ['', Validators.required],
      description: [''],
      terrain: ['normal'],
      temperature: ['normal'],
      exhaustionMultiplier: [1]
    });
    this.route.queryParams.subscribe(params => {
      const id = params['strategicSessionId'];
      this.strategicSessionService.findById(id).subscribe(response => {
        this.strategicSession = response;
      });
    });
  }

  ngOnInit(): void {
    this.enumService.findTerrains().subscribe(result => this.terrains = result);
    this.enumService.findTemperatures().subscribe(result => this.temperatures = result);
  }

  save() {
    var request = this.form.value as TacticalSessionCreation;
    request.strategicSessionId = this.strategicSession.id;
    this.tacticalSessionService.create(request).subscribe(result => {
      this.router.navigateByUrl("tactical-sessions/detail/" + result.id);
    });
  }

}
