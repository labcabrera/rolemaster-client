import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TacticalCharacter } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ActionService } from 'src/app/services/action.service';
import { TacticalAction } from 'src/app/model/actions';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-tactical-view-rmss',
  templateUrl: './tactical-view-rmss.component.html',
  styleUrls: ['./tactical-view-rmss.component.scss']
})
export class TacticalViewRmssComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  tacticalRound: TacticalRound = {} as TacticalRound;
  actions: TacticalAction[] = [];
  characters: TacticalCharacter[] = [];

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private actionService: ActionService,
    private errorService: ErrorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['tacticalSessionId'];
      this.loadTacticalSession(id);
    });
  }

  loadTacticalSession(tacticalSessionId: string) {
    this.tacticalSessionService.findById(tacticalSessionId).subscribe({
      next: response => {
        this.tacticalSession = response;
        this.loadCharacters(tacticalSessionId);
        this.loadRound(tacticalSessionId);
      },
      error: error => {
        if (error.status == 404) {
          this.router.navigateByUrl("/tactical-sessions");
        } else {
          this.errorService.displayError(error);
        }
      }
    });
  }

  loadCharacters(tacticalSessionId: string) {
    this.tacticalSessionService.findTacticalCharacterContexts(tacticalSessionId).subscribe(response => {
      this.characters = response;
    })
  }

  loadRound(tacticalSessionId: string) {
    this.tacticalSessionService.getCurrentRound(tacticalSessionId).subscribe({
      next: response => {
        if (response != null) {
          this.tacticalRound = response;
          this.loadActions(this.tacticalRound.id);
        } else {
          this.startRound();
        }
      },
      error: error => {
        if (error.status == 404) {
          this.startRound();
        } else {
          this.errorService.displayError(error)
        }
      },

    })
  }

  loadActions(roundId: string) {
    this.actionService.findActionsByRound(roundId).subscribe(response => {
      this.actions = response;
      this.loadCharacters(this.tacticalSession.id);
    });
  }

  startRound(): void {
    this.tacticalSessionService.startRound(this.tacticalSession.id).subscribe({
      next: response => {
        this.tacticalRound = response;
        this.loadCharacters(this.tacticalSession.id);
        this.actions = [];
      },
      error: error => this.errorService.displayError(error)
    });
  }

  getAction(source: string, priority: string): TacticalAction | undefined {
    if (this.actions == null) {
      return undefined;
    }
    var check = this.actions.filter(a => a.source == source && a.priority == priority);
    return check.length > 0 ? check[0] : undefined;
  }

}
