import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StrategicSession } from '../model/session';
import { StrategicSessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './strategic-session-list.component.html',
  styleUrls: ['./strategic-session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: StrategicSession[] = [];
  selectedSession?: StrategicSession;

  constructor(
    private sessionService: StrategicSessionsService) {}

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions(): void {
    this.sessionService.getSessions().subscribe(c => this.sessions = c);
  }

  onSelect(session: StrategicSession): void {
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

  deleteSession(session: StrategicSession): void {
    this.sessions = this.sessions.filter(h => h !== session);
    this.sessionService.deleteSession(session.id).subscribe();
  }

}
