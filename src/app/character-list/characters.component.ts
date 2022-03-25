import { Component, OnInit } from '@angular/core';

import { CharacterInfo } from '../model/character-info';
import { CharacterService } from '../services/character-service';

@Component({
  selector: 'app-characters',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

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

  deleteCharacter(character: CharacterInfo) : void {
    this.characterService.deleteCharacter(character.id).subscribe(e => {
      this.characters = this.characters.filter(h => h !== character);
    });
  }

}
