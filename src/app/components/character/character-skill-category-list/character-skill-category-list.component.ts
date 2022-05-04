import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

import { CharacterInfo, CharacterSkillCategory } from '../../../model/character-info';
import { SkillUpgradeRequest } from '../../../model/character-info';
import { SkillCategory } from '../../../model/skill-category';
import { CharacterService } from 'src/app/services/character-service';

@Component({
  selector: 'app-character-skill-category-list',
  templateUrl: './character-skill-category-list.component.html',
  styleUrls: ['./character-skill-category-list.component.scss']
})
export class CharacterSkillCategoryListComponent implements OnInit, AfterViewInit {

  @Input() character?: CharacterInfo = {} as CharacterInfo;
  @Input() skillCategoryDataSource: MatTableDataSource<CharacterSkillCategory> | undefined;

  @Output() onCharacterUpdated = new EventEmitter<CharacterInfo>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['categoryId', 'group', 'progressionType',
    'adolescenceRanks', 'trainingPackageRanks', 'consolidatedRanks', 'developmentRanks',
    'bonusAttribute', 'bonusProfession', 'bonusRanks',
    'developmentCost', 'totalRanks', 'totalBonus', 'options'];

  allowModifications = true;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.skillCategoryDataSource!.paginator = this.paginator!;
  }


  updateRank(categoryId: string, value: number): void {
    this.characterService.upgradeSkillCategory(this.character!.id, categoryId, value).subscribe(result => {
      this.character = result;
      this.onCharacterUpdated.emit(result);
    });
  }

  getAdolescenceRank(category: CharacterSkillCategory) {
    let cat = this.getSkillCategoryById(category.categoryId);
    return -1;
  }

  getSkillCategoryById(categoryId: string): CharacterSkillCategory {
    return this.character!.skillCategories.filter(e => e.categoryId == categoryId)[0];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.skillCategoryDataSource!.filter = filterValue.trim().toLowerCase();
  }

}
