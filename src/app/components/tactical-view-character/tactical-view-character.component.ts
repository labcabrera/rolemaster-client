import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { DialogTacticalCharacterEditionComponent } from '../dialogs/dialog-tactical-character-edition/dialog-tactical-character-edition.component';
import { DialogTacticalCharacterComponent } from '../dialogs/dialog-tactical-character/dialog-tactical-character.component';

@Component({
  selector: 'app-tactical-view-character',
  templateUrl: './tactical-view-character.component.html',
  styleUrls: ['./tactical-view-character.component.scss']
})
export class TacticalViewCharacterComponent implements OnInit {

  @Input() character: TacticalCharacterContext | undefined;

  constructor(
    private manualEditionDialog: MatDialog,
    private characterDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openTacticalCharacterDialog() {
    var dialogRef = this.characterDialog.open(DialogTacticalCharacterComponent);
    dialogRef.componentInstance.load(this.character!);
    dialogRef.afterClosed().subscribe(result => {
      //this.tacticalRound = dialogRef.componentInstance.round;
    });
  }

  openManualEditionDialog() {
    var dialogRef = this.manualEditionDialog.open(DialogTacticalCharacterEditionComponent);
    dialogRef.componentInstance.loadCharacter(this.character!);
    dialogRef.afterClosed().subscribe(result => {
      //this.actionsUpdated.emit("closed dialog");
    });
  }


}
