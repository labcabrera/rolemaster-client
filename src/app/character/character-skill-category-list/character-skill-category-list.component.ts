import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

import { CharacterInfo, CharacterSkillCategory, RankType } from '../../model/character-info';
import { SkillUpgradeRequest } from '../../model/character-info';
import { SkillCategory } from '../../model/skill-category';
import { CharacterService } from 'src/app/services/character-service';

@Component({
  selector: 'app-character-skill-category-list',
  templateUrl: './character-skill-category-list.component.html',
  styleUrls: ['./character-skill-category-list.component.scss']
})
export class CharacterSkillCategoryListComponent implements OnInit {

  @Input() character: CharacterInfo = {} as CharacterInfo;
  @Input() skillCategoryDataSource: MatTableDataSource<CharacterSkillCategory> | undefined;

  @Output() onCharacterUpdated = new EventEmitter<CharacterInfo>();

  displayedColumns: string[] = ['categoryId',
    'group',
    'developmentCost',
    'adolescenceRanks',
    'ranks',
    'bonus',
    'totalRanks',
    'totalBonus',
    'options'
  ];

  skillUpgradeRequest: SkillUpgradeRequest;
  allowModifications = true;

  constructor(
    private characterService: CharacterService
  ) {
    this.skillUpgradeRequest = {
      categoryRanks: new Map<string, number>(),
      skillRanks: new Map<string, number>()
    };
  }

  ngOnInit(): void {
  }

  updateRank(categoryId: string, value: number): void {
    this.characterService.upgradeSkillCategory(this.character.id, categoryId, value).subscribe(result => {
      //TODO
      this.character = result;
      this.onCharacterUpdated.emit(result);
      //this.skillCategoryDataSource!.data = this.character.skillCategories;
    });
  }

  _updateDevelopmentRank(value: number, categoryId: string): void {
    let category = this.character?.skillCategories.filter(e => categoryId == e.categoryId)[0]!;
    let current = category.ranks.has(RankType.development) ? category.ranks.get(RankType.development) : 0;
    let newRank = current! + value;
    if (newRank > 0) {
      category.ranks.set(RankType.development, newRank);
    } else {
      category.ranks.delete(RankType.development);
    }
  }

  getAdolescenceRank(category: CharacterSkillCategory) {
    let cat = this.getSkillCategoryById(category.categoryId);
    return -1;
  }

  getSkillCategoryById(categoryId: string): CharacterSkillCategory {
    return this.character.skillCategories.filter(e => e.categoryId == categoryId)[0];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.skillCategoryDataSource!.filter = filterValue.trim().toLowerCase();
  }

}
