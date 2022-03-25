import { Component, OnInit, Input } from '@angular/core';
import { CharacterInfo } from '../model/character-info';

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

}
