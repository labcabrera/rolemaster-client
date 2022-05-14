import { Component, Input, OnInit } from '@angular/core';
import { MatOptgroup } from '@angular/material/core';

import { OffensiveBonusMap } from 'src/app/model/actions';
import { TacticalAction } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-attack-result',
  templateUrl: './attack-result.component.html',
  styleUrls: ['./attack-result.component.scss']
})
export class AttackResultComponent implements OnInit {

  @Input() action: TacticalAction = {} as TacticalAction;

  constructor() { }

  ngOnInit(): void {
  }

}
