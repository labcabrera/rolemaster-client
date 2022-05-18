import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ActionService } from 'src/app/services/action.service';
import { ErrorService } from 'src/app/services/error.service';
import { TacticalSession } from 'src/app/model/session';
import { TacticalRound } from 'src/app/model/round';
import { TacticalAction } from 'src/app/model/actions';
import { TacticalCharacter } from 'src/app/model/character-context';

@Component({
  selector: 'app-tactical-view-rmu',
  templateUrl: './tactical-view-rmu.component.html',
  styleUrls: ['./tactical-view-rmu.component.scss']
})
export class TacticalViewRmuComponent implements OnInit {

  tacticalSession?: TacticalSession;
  tacticalRound?: TacticalRound;
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

  startRound(): void {
    this.tacticalSessionService.startRound(this.tacticalSession!.id).subscribe({
      next: response => {
        this.tacticalRound = response;
        this.loadCharacters(this.tacticalSession!.id);
        this.actions = [];
      },
      error: error => this.errorService.displayError(error)
    });
  }

  loadCharacters(tacticalSessionId: string) {
    this.tacticalSessionService.findTacticalCharacterContexts(tacticalSessionId).subscribe(response => {
      this.characters = response;
    })
  }

  private loadRound(tacticalSessionId: string): void {
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

  private loadActions(tacticalRoundId: string): void {

  }


}
