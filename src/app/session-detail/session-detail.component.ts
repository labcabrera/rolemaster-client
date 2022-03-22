import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Session } from '../model/session';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  session: Session | undefined;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionsService,
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
