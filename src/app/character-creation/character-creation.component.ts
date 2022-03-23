import { Component, OnInit } from '@angular/core';
import { CharacterCreationRequest } from '../model/character-info';
import { CharacterService } from '../services/character-service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterCreationRequest: CharacterCreationRequest;

  constructor(private characterService: CharacterService) {
    this.characterCreationRequest = this.newCharacterTemplate();
  }

  ngOnInit(): void {
  }

  newCharacterTemplate(): CharacterCreationRequest {
    return {
      name: '',
      attributesRoll: 660,
      professionId: '',
      raceId: '',
      baseAttributes: {
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

  createCharacter(): void {
    this.characterService.createCharacter(this.characterCreationRequest)
      .subscribe(character => {
        //this.sessions.push(session);
      });
  }

}
