import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionsService } from 'src/app/services/tactical-sessions.service';

@Component({
  selector: 'app-tactical-session',
  templateUrl: './tactical-session.component.html',
  styleUrls: ['./tactical-session.component.scss']
})
export class TacticalSessionComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;

  constructor(
    private route: ActivatedRoute,
    private tacticalSessionService: TacticalSessionsService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.tacticalSessionService.getTacticalSession(id).subscribe(s => {
      this.tacticalSession = s;
    });
  }

}
