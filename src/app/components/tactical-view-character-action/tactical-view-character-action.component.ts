import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';

import { TacticalAction } from 'src/app/model/actions';
import { TacticalRound } from 'src/app/model/round';
import { DialogSelectActionComponent } from 'src/app/components/dialogs/dialog-select-action/dialog-select-action.component';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { ActionService } from 'src/app/services/action.service';
import { DialogActionExecutionComponent } from '../dialogs/dialog-action-execution/dialog-action-execution.component';

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

  @Output() actionsUpdated = new EventEmitter<string>();

  constructor(
    private actionService: ActionService,
    private actionSelectionDialog: MatDialog,
    private actionExecutionDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openActionSelectionDialog() {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.load(this.tacticalRound!, this.source!, this.priority!, this.characters!);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("closed dialog");
    });
  }

  openAction(action: TacticalAction) {
    var dialogRef = this.actionSelectionDialog.open(DialogSelectActionComponent);
    dialogRef.componentInstance.load(this.tacticalRound!, this.source!, this.priority!, this.characters!);
    dialogRef.componentInstance.loadAction(action);
    dialogRef.afterClosed().subscribe(result => {
      this.actionsUpdated.emit("closed dialog");
    });
  }

  openActionExecutionDialog(action: TacticalAction) {
    var dialogRef = this.actionExecutionDialog.open(DialogActionExecutionComponent);
    dialogRef.componentInstance.load(action, this.characters!);
    dialogRef.afterClosed().subscribe(result => {
      //TODO reload actions
    });
  }

  openCriticalExecutionDialog(action: TacticalAction) {
    this.openActionExecutionDialog(action);
  }

  openFumbleExecutionDialog(action: TacticalAction) {
    this.openActionExecutionDialog(action);
  }

  deleteAction() {
    this.actionService.delete(this.action!.id).subscribe(result => {
      this.actionsUpdated.emit("deleted action");
    });
  }

  checkDisplayButtonActionExecution(action: TacticalAction) {
    if(this.tacticalRound?.state != 'action-resolution') {
      return false;
    }
    if(action.state == 'resolved' || action.state == 'pending-critical-resolution' || action.state == 'pending-fumble-resolution') {
      return false;
    }
    return true;
  }

  checkDisplayButtonCriticalExecution(action: TacticalAction) {
    if(this.tacticalRound?.state != 'action-resolution') {
      return false;
    }
    if(action.state != "pending-critical-resolution") {
      return false;
    }
    return true;
  }

  checkDisplayButtonFumbleExecution(action: TacticalAction) {
    if(this.tacticalRound?.state != 'action-resolution') {
      return false;
    }
    if(action.state != "pending-fumble-resolution") {
      return false;
    }
    return true;
  }

}
