import { Component, OnInit } from '@angular/core';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionsService } from 'src/app/services/tactical-sessions.service';

@Component({
  selector: 'app-tactical-sessions',
  templateUrl: './tactical-sessions.component.html',
  styleUrls: ['./tactical-sessions.component.scss']
})
export class TacticalSessionsComponent implements OnInit {

  tacticalSessions?: TacticalSession[];

  constructor( private tacticalSessionService: TacticalSessionsService) { }

  ngOnInit(): void {
    this.tacticalSessionService.getTacticalSessions().subscribe(s => this.tacticalSessions = s);
  }

}
