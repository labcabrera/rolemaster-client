import { Component, OnInit } from '@angular/core';

import { CharacterInfo } from '../model/character-info';
import { CHARACTERS } from '../mock/mock-characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = CHARACTERS;
  selectedCharacter?: CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(characterInfo: CharacterInfo): void {
    this.selectedCharacter = characterInfo;
  }

}
