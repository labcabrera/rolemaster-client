import { Component, OnInit } from '@angular/core';
import { CharacterCreationRequest } from '../model/character-info';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterCreationRequest: CharacterCreationRequest;

  constructor() {
    this.characterCreationRequest = {
      name: '',
      attributesRoll: 660,
      professionId: '',
      raceId: '',
      attributes: {
        ag: 50,
        co: 50,
        em: 50,
        in: 50,
        me: 50,
        pr: 50,
        qu: 50,
        re: 50,
        sd: 50,
        st: 50
      }
    }
  }

  ngOnInit(): void {
  }

}
