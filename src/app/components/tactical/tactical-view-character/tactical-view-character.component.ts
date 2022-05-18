import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacter } from 'src/app/model/character-context';
import { DialogTacticalCharacterEditionComponent } from '../../dialogs/dialog-tactical-character-edition/dialog-tactical-character-edition.component';
import { DialogTacticalCharacterComponent } from '../../dialogs/dialog-tactical-character/dialog-tactical-character.component';
import { DialogEditHpComponent } from '../../dialogs/dialog-edit-hp/dialog-edit-hp.component';

@Component({
  selector: 'app-tactical-view-character',
  templateUrl: './tactical-view-character.component.html',
  styleUrls: ['./tactical-view-character.component.scss']
})
export class TacticalViewCharacterComponent implements OnInit {

  @Input() character: TacticalCharacter | undefined;

  constructor(
    private manualEditionDialog: MatDialog,
    private dialogEditHp: MatDialog,
    private characterDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialogSetHitPoints() {
    var dialogEditHpRef = this.characterDialog.open(DialogEditHpComponent);
    dialogEditHpRef.componentInstance.loadCharacter(this.character!);
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

  getHpStyle() {
    const hpPercent = this.character!.hp.percent;
    if(hpPercent <= 0) {
      return `background-color: rgb(47, 8, 8);`;
    }
    const a = 1- hpPercent / 100;
    return `background-color: rgba(138, 14, 14, ${a});`;
  }



}
