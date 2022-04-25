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

  getMainHandResult() {
    var attackResult = this.action.attackResults['main-hand'].result;
    var bonus = this.action.attackResults['main-hand'].totalBonus;
    var roll = this.action.rolls['main-hand'].result;
    return `${attackResult} (${roll} + ${bonus})`;
  }

  getOffHandResult() {
    var attackResult = this.action.attackResults['off-hand'].result;
    var bonus = this.action.attackResults['off-hand'].totalBonus;
    var roll = this.action.rolls['off-hand'].result;
    return `${attackResult} (${roll} + ${bonus})`;
  }

  getOffensiveModifiers(map: OffensiveBonusMap): NamedKey[] {
    var result: NamedKey[] = [];
    result.push({ key: "Skill", name: "" + map.skill });
    result.push({ key: "Defensive bonus", name: "" + map['defensive-bonus'] });
    if (map.parry && map.parry != 0) {
      result.push({ key: "Parry", name: "" + map.parry });
    }
    if (map.shield && map.shield != 0) {
      result.push({ key: "Shield", name: "" + map.shield });
    }
    if (map['action-percent'] && map['action-percent'] != 0) {
      result.push({ key: "Action percent", name: "" + map['action-percent'] });
    }
    if (map['target-status'] && map['target-status'] != 0) {
      result.push({ key: "Target status", name: "" + map['target-status'] });
    }
    if (map.hp && map.hp != 0) {
      result.push({ key: "Hp", name: "" + map.hp });
    }
    if (map['melee-facing'] && map['melee-facing'] != 0) {
      result.push({ key: "Facing", name: "" + map['melee-facing'] });
    }
    if (map.exhaustion && map.exhaustion != 0) {
      result.push({ key: "Exhaustion", name: "" + map.exhaustion });
    }
    if (map.distance && map.distance != 0) {
      result.push({ key: "Distance", name: "" + map.distance });
    }
    if (map['off-hand'] && map['off-hand'] != 0) {
      result.push({ key: "Off-Hand", name: "" + map['off-hand'] });
    }
    return result;
  }

}
