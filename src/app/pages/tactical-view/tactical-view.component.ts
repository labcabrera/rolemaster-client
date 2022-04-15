import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { DialogSelectActionComponent } from 'src/app/components/dialogs/dialog-select-action/dialog-select-action.component';
import { ActionService } from 'src/app/services/action.service';
import { TacticalAction } from 'src/app/model/actions';
import { MessageService } from 'src/app/services/message.service';
import { DialogSetInitiativeComponent } from 'src/app/components/dialogs/dialog-set-initiative/dialog-set-initiative.component';
import { DialogTacticalCharacterComponent } from 'src/app/components/dialogs/dialog-tactical-character/dialog-tactical-character.component';

@Component({
  selector: 'app-tactical-view',
  templateUrl: './tactical-view.component.html',
  styleUrls: ['./tactical-view.component.scss']
})
export class TacticalViewComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  tacticalRound: TacticalRound = {} as TacticalRound;
  actions: TacticalAction[] = [];
  characters: TacticalCharacterContext[] = [];

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private actionService: ActionService,
    private messageService: MessageService,
    private setInitiativeDialog: MatDialog,
    private route: ActivatedRoute) { }

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
      if(response != null) {
        this.tacticalRound = response;
        this.loadActions(this.tacticalRound.id);
      } else {
        this.messageService.add("Starting new round");
        this.startRound();
      }
    })
  }

  loadActions(roundId: string) {
    this.actionService.findActionsByRound(roundId).subscribe(response => {
      this.actions = response;
    });
  }

  startRound() {
    this.tacticalSessionService.startRound(this.tacticalSession.id).subscribe(response => {
      this.tacticalRound = response;
      this.actions = [];
    });
  }

  startInitiativeDeclaration() {
    this.tacticalSessionService.startInitiativeDeclaration(this.tacticalSession.id).subscribe(response => {
      this.tacticalRound = response;
    })
  }

  startExecutionPhase() {
    this.tacticalSessionService.startExecutionPhase(this.tacticalSession.id).subscribe(response => {
      this.tacticalRound = response;
      this.loadActions(this.tacticalRound.id);
    })
  }

  getAction(source: string, priority: string): TacticalAction | undefined {
    if (this.actions == null) {
      return undefined;
    }
    var check = this.actions.filter(a => a.source == source && a.priority == priority);
    return check.length > 0 ? check[0] : undefined;
  }

  getCharacterInitiativeBase(character: TacticalCharacterContext) {
    return 0;
  }

  getCharacterInitiativeModifiers(character: TacticalCharacterContext) {
    return 0;
  }

  getCharacterInitiativeRoll(character: TacticalCharacterContext) {
    if(!this.tacticalRound || !this.tacticalRound.initiativeModifiersMap) {
      return 0;
    }
    const key = character.id;
    if(this.tacticalRound.initiativeRollMap.hasOwnProperty(key)) {
      const tmp = new Map(Object.entries(this.tacticalRound.initiativeRollMap));
      return tmp.get(key);
    }
    return 0;
  }

  getCharacterInitiative(character: TacticalCharacterContext) {
    return this.getCharacterInitiativeBase(character) + this.getCharacterInitiativeModifiers(character) + this.getCharacterInitiativeRoll(character);
  }

  openInitiativeDialog(character: TacticalCharacterContext) {
    var dialogRef = this.setInitiativeDialog.open(DialogSetInitiativeComponent);
    dialogRef.componentInstance.load(this.tacticalSession, this.tacticalRound, character);
    dialogRef.afterClosed().subscribe(result => {
      this.tacticalRound = dialogRef.componentInstance.round;
    });
  }

}
