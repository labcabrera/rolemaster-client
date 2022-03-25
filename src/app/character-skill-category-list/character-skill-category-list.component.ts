import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';

import { CharacterInfo, CharacterSkillCategory } from '../model/character-info';

@Component({
  selector: 'app-character-skill-category-list',
  templateUrl: './character-skill-category-list.component.html',
  styleUrls: ['./character-skill-category-list.component.scss']
})
export class CharacterSkillCategoryListComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
