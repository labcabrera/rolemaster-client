import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Skill } from 'src/app/model/skill';
import { CharacterInfo, CharacterSkill } from '../../model/character-info';
import { CharacterService } from 'src/app/services/character-service';
import { TrainingPackageService } from 'src/app/services/training-packages.service';

@Component({
  selector: 'app-character-skill-list',
  templateUrl: './character-skill-list.component.html',
  styleUrls: ['./character-skill-list.component.scss']
})
export class CharacterSkillListComponent implements OnInit {

  @Input() character: CharacterInfo = {} as CharacterInfo;
  @Input() skillDataSource: MatTableDataSource<CharacterSkill> | undefined;

  @Output() onCharacterUpdated = new EventEmitter<CharacterInfo>();

  displayedColumns: string[] = ['categoryId', 'group', 'developmentCost', 'ranks', 'bonus', 'totalRanks', 'totalBonus', 'options'];
  includeUndevelopedSkills: boolean = true;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  updateRank(skillId: string, value: number): void {
    this.characterService.upgradeSkill(this.character.id, skillId, value).subscribe(result => {
      //TODO
      this.character = result;
      this.onCharacterUpdated.emit(result);
      //this.skillCategoryDataSource!.data = this.character.skillCategories;
    });
  }

  addSkill(event: any) {
    console.log("TODO: addSKill", event)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.skillDataSource!.filter = filterValue.trim().toLowerCase();
  }

}
