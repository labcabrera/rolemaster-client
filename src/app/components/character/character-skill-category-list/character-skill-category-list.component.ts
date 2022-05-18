import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { CharacterInfo, CharacterSkillCategory } from '../../../model/character-info';
import { CharacterService } from 'src/app/services/character-service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-character-skill-category-list',
  templateUrl: './character-skill-category-list.component.html',
  styleUrls: ['./character-skill-category-list.component.scss']
})
export class CharacterSkillCategoryListComponent implements AfterViewInit {

  @Input() character?: CharacterInfo = {} as CharacterInfo;
  @Input() skillCategoryDataSource: MatTableDataSource<CharacterSkillCategory> | undefined;

  @Output() onCharacterUpdated = new EventEmitter<CharacterInfo>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['category-id', 'group', 'progression-type',
    'adolescence-ranks', 'training-package-ranks', 'consolidated-ranks', 'development-ranks',
    'bonus-attribute', 'bonus-profession', 'bonus-ranks',
    'development-cost', 'total-ranks', 'total-bonus', 'options'];

  allowModifications = true;

  constructor(
    private characterService: CharacterService,
    private errorService: ErrorService) {
  }

  ngAfterViewInit() {
    this.skillCategoryDataSource!.paginator = this.paginator!;
  }


  updateRank(categoryId: string, value: number): void {
    this.characterService.upgradeSkillCategory(this.character!.id, categoryId, value).subscribe({
      next: result => {
        this.character = result;
        this.onCharacterUpdated.emit(result);
      },
      error: error => this.errorService.displayError(error)
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

  openDialogDetail(category: CharacterSkillCategory) {
    this.errorService.displayError({error:{message:"Not implemented."}});
  }

  openDialogCustomization(category: CharacterSkillCategory) {
    this.errorService.displayError({error:{message:"Not implemented."}});
  }

}
