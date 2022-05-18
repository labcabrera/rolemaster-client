import { Component, Input } from '@angular/core';
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
export class TacticalViewCharacterComponent {

  @Input() character: TacticalCharacter | undefined;

  constructor(
    private manualEditionDialog: MatDialog,
    private characterDialog: MatDialog
  ) { }

  openDialogSetHitPoints() {
    var dialogEditHpRef = this.characterDialog.open(DialogEditHpComponent);
    dialogEditHpRef.componentInstance.loadCharacter(this.character!);
  }

  openTacticalCharacterDialog() {
    var dialogRef = this.characterDialog.open(DialogTacticalCharacterComponent);
    dialogRef.componentInstance.load(this.character!);
  }

  openManualEditionDialog() {
    var dialogRef = this.manualEditionDialog.open(DialogTacticalCharacterEditionComponent);
    dialogRef.componentInstance.loadCharacter(this.character!);
  }

  getHpStyle() {
    const hpPercent = this.character!.hp.percent;
    const a = 1 - hpPercent / 100;
    return `background-color: rgba(138, 14, 14, ${a});`;
  }

}
