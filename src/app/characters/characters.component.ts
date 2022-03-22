import { Component, OnInit } from '@angular/core';

import { CharacterInfo } from '../model/character-info';
import { CHARACTERS } from '../mock/mock-characters';
import { CharacterService } from '../services/character-service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: CharacterInfo[] = [];
  selectedCharacter?: CharacterInfo;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect(characterInfo: CharacterInfo): void {
    this.selectedCharacter = characterInfo;
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(c => this.characters = c);
  }

}
