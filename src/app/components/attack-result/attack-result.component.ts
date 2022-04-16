import { Component, Input, OnInit } from '@angular/core';
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

  getOffensiveModifiers(): NamedKey[] {
    var result: NamedKey[] = [];
    result.push({key: "Skill", name: "" + this.action.offensiveBonusMap.skill});
    result.push({key: "Defensive bonus", name: "" + this.action.offensiveBonusMap['defensive-bonus']});
    result.push({key: "Parry", name: "" + this.action.offensiveBonusMap.parry});
    result.push({key: "Shield", name: "" + this.action.offensiveBonusMap.shield});
    result.push({key: "Action percent", name: "" + this.action.offensiveBonusMap['action-percent']});
    result.push({key: "Target status", name: "" + this.action.offensiveBonusMap['target-status']});
    result.push({key: "Hp", name: "" + this.action.offensiveBonusMap.hp});
    result.push({key: "Facing", name: "" + this.action.offensiveBonusMap['melee-facing']});
    result.push({key: "Exhaustion", name: "" + this.action.offensiveBonusMap.exhaustion});
    if(this.action.offensiveBonusMap.distance) {
      result.push({key: "Distance", name: "" + this.action.offensiveBonusMap.distance});
    }
    return result;
  }

}
