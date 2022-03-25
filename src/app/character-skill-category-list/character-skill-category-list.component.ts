import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

import { CharacterInfo, CharacterSkillCategory } from '../model/character-info';
import { SkillUpgradeRequest } from '../model/character-info';
import { SkillCategory } from '../model/skill-category';

@Component({
  selector: 'app-character-skill-category-list',
  templateUrl: './character-skill-category-list.component.html',
  styleUrls: ['./character-skill-category-list.component.scss']
})
export class CharacterSkillCategoryListComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  skillUpgradeRequest: SkillUpgradeRequest;
  allowModifications = true;

  constructor() {
    this.skillUpgradeRequest = {
      categoryRanks: new Map<string, number>(),
      skillRanks: new Map<string, number>()
    }
  }

  ngOnInit(): void {
  }

  updateSkillCategoryDevelopment(value: number, categoryId: string): void {
    let rank = 0;
    if (this.skillUpgradeRequest.categoryRanks.has(categoryId)) {
      rank = this.skillUpgradeRequest.categoryRanks.get(categoryId)!;
    }
    let newRank = rank + value;
    let skillCategory = this.getSkillCategory(categoryId);
    if(newRank > skillCategory.developmentCost.length) {
      newRank = skillCategory.developmentCost.length;
    }
    if (newRank > 0) {
      this.skillUpgradeRequest.categoryRanks.set(categoryId, newRank);
    } else {
      this.skillUpgradeRequest.categoryRanks.delete(categoryId);
    }
    this.updateRemainingPoints();
  }

  updateRemainingPoints() {
    console.log("Updating remaining points")
    let tmp = 0;
    for (let categoryId of this.skillUpgradeRequest.categoryRanks.keys()) {
      let skillCategory = this.getSkillCategory(categoryId);
      console.log("Updating remaining points. Category: " + skillCategory);
      let level = this.skillUpgradeRequest.categoryRanks.get(categoryId)!;
      if(level == 1) {
        tmp = tmp + skillCategory?.developmentCost[0]!;
      } else if(level == 2) {
        tmp = tmp + skillCategory?.developmentCost[0]! + skillCategory?.developmentCost[1]!;
      } else if(level == 3) {
        tmp = tmp + skillCategory?.developmentCost[0]! + skillCategory?.developmentCost[1]! + skillCategory?.developmentCost[2]!;
      }
    }
    let total = this.characterInfo?.developmentPoints.totalPoints;
    let remaining = total! - tmp!;
    console.log("Updating remaining points. Remaining: " + remaining);
    this.characterInfo!.developmentPoints.remainingPoints = remaining;
  }

  getSkillCategory(skillCategoryId : String): CharacterSkillCategory {
    return this.characterInfo?.skillCategories.filter(e => e.categoryId == skillCategoryId)[0]!;
  }

}
