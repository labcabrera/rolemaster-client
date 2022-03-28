import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Session } from '../model/session';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = [];
  selectedSession?: Session;

  constructor(
    private sessionService: SessionsService) {}

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions(): void {
    this.sessionService.getSessions().subscribe(c => this.sessions = c);
  }

  onSelect(session: Session): void {
    this.selectedSession = session;
  }

  createSession(): void {
    console.log("Creating session");
    var name = 'Demo session ' + new Date().toISOString();
    var request = {name:name};
    this.sessionService.createSession(request)
      .subscribe(session => {
        this.sessions.push(session);
      });
  }

  deleteSession(session: Session): void {
    this.sessions = this.sessions.filter(h => h !== session);
    this.sessionService.deleteSession(session.id).subscribe();
  }

}
