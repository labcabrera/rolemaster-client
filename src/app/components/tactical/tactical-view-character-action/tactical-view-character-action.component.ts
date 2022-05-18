import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalRound } from 'src/app/model/round';
import { DialogSelectActionComponent } from 'src/app/components/dialogs/dialog-select-action/dialog-select-action.component';
import { TacticalCharacter } from 'src/app/model/character-context';
import { ActionService } from 'src/app/services/action.service';
import { DialogActionExecutionComponent } from '../../dialogs/dialog-action-execution/dialog-action-execution.component';
import { TacticalSession } from 'src/app/model/session';
import { DialogInitiativeDeclarationComponent } from '../../dialogs/dialog-initiative-declaration/dialog-initiative-declaration.component';

@Component({
  selector: 'app-tactical-view-character-action',
  templateUrl: './tactical-view-character-action.component.html',
  styleUrls: ['./tactical-view-character-action.component.scss']
})
export class TacticalViewCharacterActionComponent implements OnInit {

  @Input() source?: TacticalCharacter;
  @Input() priority?: string;
  @Input() action?: TacticalAction;
  @Input() tacticalSession?: TacticalSession;
  @Input() tacticalRound?: TacticalRound;
  @Input() characters: TacticalCharacter[] | undefined;
  @Input() actions: TacticalAction[] = [];

  @Output() actionsUpdated = new EventEmitter<string>();

  constructor(
    private actionService: ActionService,
    private actionSelectionDialog: MatDialog,
    private actionExecutionDialog: MatDialog,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openActionSelectionDialog() {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.load(this.tacticalSession!, this.tacticalRound!, this.source!, this.priority!, this.characters!, this.actions);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("closed dialog");
    });
  }

  openAction(action: TacticalAction) {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.load(this.tacticalSession!, this.tacticalRound!, this.source!, this.priority!, this.characters!, this.actions);
    dialogRef.componentInstance.loadAction(action);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("closed dialog");
    });
  }

  openInitiativeDeclarationDialog(action: TacticalAction) {
    const character = this.characters!.filter(e => e.id === action.source)[0];
    var dialogRef = this.dialog.open(DialogInitiativeDeclarationComponent);
    dialogRef.componentInstance.load(this.tacticalSession!, character, action);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("updated");
    });
  }

  openActionExecutionDialog(action: TacticalAction) {
    var dialogRef = this.actionExecutionDialog.open(DialogActionExecutionComponent);
    dialogRef.componentInstance.load(action, this.characters!);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("updated");
    });
  }

  deleteAction() {
    this.actionService.delete(this.action!.id).subscribe(result => {
      this.actionsUpdated.emit("deleted action");
    });
  }

  checkDisplayButtonActionExecution(action: TacticalAction) {
    if(action.state == 'resolved' || action.state == 'pending-critical-resolution' || action.state == 'pending-fumble-resolution') {
      return false;
    }
    return true;
  }

  checkDisplayButtonCriticalExecution(action: TacticalAction) {
    if(action.state != "pending-critical-resolution") {
      return false;
    }
    return true;
  }

  checkDisplayButtonFumbleExecution(action: TacticalAction) {
    if(action.state != "pending-fumble-resolution") {
      return false;
    }
    return true;
  }

}
