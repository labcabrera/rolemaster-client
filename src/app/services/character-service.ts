import { Injectable } from '@angular/core';
import { CHARACTERS } from '../mock/mock-characters';
import { CharacterInfo } from '../model/character-info';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  getCharacters(): Observable<CharacterInfo[]> {
    const characters = of(CHARACTERS);
    return characters;
  }

  constructor() { }
}
