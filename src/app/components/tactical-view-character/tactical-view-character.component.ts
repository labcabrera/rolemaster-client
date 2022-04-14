import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TacticalCharacterContext } from 'src/app/model/character-context';
import { TacticalViewCharacterManualEditionComponent } from '../tactical-view-character-manual-edition/tactical-view-character-manual-edition.component';

@Component({
  selector: 'app-tactical-view-character',
  templateUrl: './tactical-view-character.component.html',
  styleUrls: ['./tactical-view-character.component.scss']
})
export class TacticalViewCharacterComponent implements OnInit {

  @Input() character: TacticalCharacterContext | undefined;

  constructor(
    private manualEditionDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openManualEditionDialog() {
    var dialogRef = this.manualEditionDialog.open(TacticalViewCharacterManualEditionComponent);
    dialogRef.componentInstance.loadCharacter(this.character!);
    dialogRef.afterClosed().subscribe(result => {
      //this.actionsUpdated.emit("closed dialog");
    });
  }

}
