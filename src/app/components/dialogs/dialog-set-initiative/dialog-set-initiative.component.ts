import { Component, OnInit } from '@angular/core';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalRound } from 'src/app/model/round';
import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';

@Component({
  selector: 'app-dialog-set-initiative',
  templateUrl: './dialog-set-initiative.component.html',
  styleUrls: ['./dialog-set-initiative.component.scss']
})
export class DialogSetInitiativeComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  round: TacticalRound = {} as TacticalRound;
  character: TacticalCharacterContext = {} as TacticalCharacterContext;
  roll: number | undefined;

  constructor(
    private tacticalSessionService: TacticalSessionService
  ) { }

  ngOnInit(): void {
  }

  load(tacticalSession: TacticalSession, round: TacticalRound, character: TacticalCharacterContext) {
    this.tacticalSession = tacticalSession;
    this.round = round;
    this.character = character;
  }

  update() {
    this.tacticalSessionService.declareInitiative(this.tacticalSession.id, this.character.id, this.roll!).subscribe(result => {
      this.round = result;
    });
  }

}
