import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';

import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';

@Component({
  selector: 'app-tactical-view',
  templateUrl: './tactical-view.component.html',
  styleUrls: ['./tactical-view.component.scss']
})
export class TacticalViewComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  tacticalRound: TacticalRound = {} as TacticalRound;
  characters: TacticalCharacterContext[] = [];

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['tacticalSessionId'];
      this.loadTacticalSession(id);
      this.loadCharacters(id);
    });
  }

  loadTacticalSession(tacticalSessionId: string) {
    this.tacticalSessionService.findById(tacticalSessionId).subscribe(response => {
      this.tacticalSession = response;
    });
  }

  loadCharacters(tacticalSessionId: string) {
    this.tacticalSessionService.findTacticalCharacterContexts(tacticalSessionId).subscribe(response => {
      this.characters = response;
    })
  }

  startRound() {
    this.tacticalSessionService.startRound(this.tacticalSession.id).subscribe(response => {
      this.tacticalRound = response;
    });
  }

}
