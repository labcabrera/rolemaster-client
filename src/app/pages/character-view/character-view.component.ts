import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { CharacterInfo, CharacterSkillCategory, CharacterSkill } from '../../model/character-info';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  character?: CharacterInfo;
  skillCategoryDataSource: MatTableDataSource<CharacterSkillCategory>;
  skillDataSource: MatTableDataSource<CharacterSkill>;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) {
    this.skillCategoryDataSource = new MatTableDataSource([] as CharacterSkillCategory[]);
    this.skillDataSource = new MatTableDataSource([] as CharacterSkill[]);
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id).subscribe(result => {
      this.character = result;
      this.skillCategoryDataSource.data = this.character.skillCategories;
      this.skillDataSource.data = this.character.skills;
    });
  }

  reloadCharacterInfo(character: CharacterInfo) {
    this.character = character;
    this.skillCategoryDataSource.data = this.character.skillCategories;
    this.skillDataSource.data = this.character.skills;
  }

  delete() {
    this.characterService.deleteCharacter(this.character!.id).subscribe(result => {
      this.router.navigateByUrl("/characters");
    });
  }

  availableDevelopmentPoints(): number {
    if(!this.character || !this.character.developmentPoints) {
      return 0;
    }
    return this.character.developmentPoints.totalPoints - this.character.developmentPoints.usedPoints;
  }

}
