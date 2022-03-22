import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  sessions: Session[] = [];
  selectedSession?: Session;

  constructor(private sessionService: SessionsService) {}

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
    this.sessionService.createSession({id:'',name: 'test session'})
      .subscribe(session => {
        this.sessions.push(session);
      });
  }

}
