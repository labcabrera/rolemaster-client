import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { CharacterInfo, CharacterSkillCategory } from '../../model/character-info';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  character: CharacterInfo;
  skillCategoryDataSource: MatTableDataSource<CharacterSkillCategory>;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) {
    this.character = {} as CharacterInfo;
    this.skillCategoryDataSource = new MatTableDataSource([] as CharacterSkillCategory[]);
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id).subscribe(c => {
      this.character = c;
      this.skillCategoryDataSource = new MatTableDataSource(this.character.skillCategories);
    });
  }

  reloadCharacterInfo(character: CharacterInfo) {
    this.character = character;
    this.skillCategoryDataSource.data = this.character.skillCategories;
  }

  delete() {
    this.characterService.deleteCharacter(this.character.id).subscribe(result => {
      this.router.navigateByUrl("/characters");
    });
  }

  availableDevelopmentPoints() {
    if(!this.character || !this.character.developmentPoints) {
      return false;
    }
    return this.character.developmentPoints.usedPoints < this.character.developmentPoints.totalPoints;
  }

}
