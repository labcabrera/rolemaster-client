import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StrategicSession } from '../../model/session';
import { StrategicSessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './strategic-session.component.html',
  styleUrls: ['./strategic-session.component.css']
})
export class StrategicSessionComponent implements OnInit {

  session: StrategicSession | undefined;

  constructor(
    private route: ActivatedRoute,
    private sessionService: StrategicSessionsService,
    private location: Location) {}

  ngOnInit(): void {
    this.getSession();
  }

  getSession(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.sessionService.getSession(id).subscribe(c => this.session = c);
  }

  goBack(): void {
    this.location.back();
  }

}
