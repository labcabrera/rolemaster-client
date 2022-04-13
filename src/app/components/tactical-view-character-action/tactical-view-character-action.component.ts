import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalRound } from 'src/app/model/round';
import { DialogSelectActionComponent } from 'src/app/components/dialog-select-action/dialog-select-action.component';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-tactical-view-character-action',
  templateUrl: './tactical-view-character-action.component.html',
  styleUrls: ['./tactical-view-character-action.component.scss']
})
export class TacticalViewCharacterActionComponent implements OnInit {

  @Input() source: string | undefined;
  @Input() priority: string | undefined;
  @Input() action: TacticalAction | undefined;
  @Input() tacticalRound: TacticalRound | undefined;
  @Input() characters: TacticalCharacterContext[] | undefined;

  constructor(
    private actionService: ActionService,
    private actionSelectionDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openActionSelectionDialog() {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.load(this.tacticalRound!, this.source!, this.priority!, this.characters!);
    dialogRef.afterClosed().subscribe(result => {
      //this.loadRound(this.tacticalSession.id);
    });
  }

  deleteAction() {
    this.actionService.delete(this.action!.id).subscribe(result => {
      
    });
  }

}
