import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { CharacterInfo, CharacterSkill } from '../../model/character-info';

@Component({
  selector: 'app-character-skill-list',
  templateUrl: './character-skill-list.component.html',
  styleUrls: ['./character-skill-list.component.scss']
})
export class CharacterSkillListComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

  updateDevelopmentRank(value: number, skill: CharacterSkill): void {
    if(value != 1 && value != -1) {
      throw("Invalid increment");
    }
    let newValue = skill.ranks.development + value;
    if(newValue < 0) {
      return;
    }
    if(newValue <= skill.developmentCost.length) {
      let cost = 0;
      if(value > 0) {
        cost = skill.developmentCost[newValue - 1];
      } else {
        cost = -skill.developmentCost[newValue];
      }
      console.log("cost += " + cost);
      skill.ranks.development = newValue;
      this.characterInfo!.developmentPoints.usedPoints += cost;
    }
  }

}
