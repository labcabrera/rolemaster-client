import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private characterService: CharacterService) {
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

}
