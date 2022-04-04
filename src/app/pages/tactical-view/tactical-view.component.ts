import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { DialogSelectActionComponent } from 'src/app/components/dialog-select-action/dialog-select-action.component';

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
    private route: ActivatedRoute,
    public actionSelectionDialog: MatDialog) {}

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

  openActionSelectionDialog() {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.minActionPercent = 1;
    dialogRef.componentInstance.maxActionPercent = 20;
  }

}
