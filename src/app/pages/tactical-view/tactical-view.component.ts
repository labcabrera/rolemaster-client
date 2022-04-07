import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { DialogSelectActionComponent } from 'src/app/components/dialog-select-action/dialog-select-action.component';
import { ActionService } from 'src/app/services/action.service';

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
    private actionService: ActionService,
    private route: ActivatedRoute,
    public actionSelectionDialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['tacticalSessionId'];
      this.loadTacticalSession(id);
      this.loadCharacters(id);
      this.loadRound(id);
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

  loadRound(tacticalSessionId: string) {
    this.tacticalSessionService.getCurrentRound(tacticalSessionId).subscribe(response => {
      this.tacticalRound = response;
    })
  }

  startRound() {
    this.tacticalSessionService.startRound(this.tacticalSession.id).subscribe(response => {
      this.tacticalRound = response;
    });
  }

  openActionSelectionDialog(source: string, priority: string) {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.loadActionData(this.tacticalSession.id, source, priority, this.characters);
    dialogRef.afterClosed().subscribe(result => {
      if(dialogRef.componentInstance.tacticalRoundUpdated) {
        this.tacticalRound = dialogRef.componentInstance.tacticalRoundUpdated!;
      }
    });
  }

  removeDeclaredAction(source: string, priority: string) {
    this.actionService.delete(this.tacticalSession.id, source, priority).subscribe(result => {
      this.tacticalRound = result;
    });
  }

  hasAction(characterId: string, priority: string): boolean {
    if (this.tacticalRound == null || this.tacticalRound.actions == null) {
      return false;
    }
    var check = this.tacticalRound.actions.filter(a => a.source == characterId && a.priority == priority);
    return check.length > 0;
  }

  getAction(characterId: string, priority: string) {
    if (this.tacticalRound == null || this.tacticalRound.actions == null) {
      return null;
    }
    var check = this.tacticalRound.actions.filter(a => a.source == characterId && a.priority == priority);
    return check.length > 0 ? check[0] : null;
  }

}
