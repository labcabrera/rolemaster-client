import { Component, Input, OnInit } from '@angular/core';
import { TacticalAction } from 'src/app/model/actions';

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

  getOffensiveModifiers(): string[] {
    const map = new Map(Object.entries(this.action.offensiveBonusMap));
    var result: string[] = [];
    map.forEach((value, key) => {
      if (value != 0) {
        result.push(key + ": " + value);
      }
    });
    return result;
  }

}
