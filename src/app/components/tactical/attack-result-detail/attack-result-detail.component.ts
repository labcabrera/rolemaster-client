import { Component, Input, OnInit } from '@angular/core';

import { AttackResult } from 'src/app/model/actions';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-attack-result-detail',
  templateUrl: './attack-result-detail.component.html',
  styleUrls: ['./attack-result-detail.component.scss']
})
export class AttackResultDetailComponent implements OnInit {

  @Input() attackName?: string;
  @Input() attackResult?: AttackResult;
  @Input() offensiveBonusMap?: any;

  constructor() { }

  ngOnInit(): void {
  }

  getOffensiveModifiers(): NamedKey[] {
    var result: NamedKey[] = [];
    Object.keys(this.offensiveBonusMap).forEach(key => {
      const value = this.offensiveBonusMap[key];
      if (value != 0) {
        result.push({ key: key, name: value })
      }
    });
    return result;
  }

}
