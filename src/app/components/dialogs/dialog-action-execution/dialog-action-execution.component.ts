import { Component, OnInit } from '@angular/core';
import { TacticalAction, TacticalActionExecution } from 'src/app/model/actions';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-dialog-action-execution',
  templateUrl: './dialog-action-execution.component.html',
  styleUrls: ['./dialog-action-execution.component.scss']
})
export class DialogActionExecutionComponent implements OnInit {

  action: TacticalAction = {} as TacticalAction;
  actionExecution: TacticalActionExecution = {} as TacticalActionExecution;

  constructor(
    private actionService: ActionService) { }

  ngOnInit(): void {
  }

  load(action: TacticalAction) {
    this.action = action;
  }

  executeAction() {
    //TODO
    this.actionExecution.roll = { result: 75, rolls: [75] }
    this.actionExecution.position = 'normal';

    console.log("Execution action ", this.action.id, ", execution: ", this.actionExecution);

    this.actionService.execute(this.action.id, this.actionExecution).subscribe(result => {
      //TODO reload actions
      this.action = result;
    });
  }

}
