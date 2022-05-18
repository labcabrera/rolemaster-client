import { Component, Input } from '@angular/core';

import { TacticalAction } from 'src/app/model/actions';

@Component({
  selector: 'app-attack-result',
  templateUrl: './attack-result.component.html',
  styleUrls: ['./attack-result.component.scss']
})
export class AttackResultComponent {

  @Input() action: TacticalAction = {} as TacticalAction;

}
