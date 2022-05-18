import { Component, OnInit } from '@angular/core';
import { TacticalCharacter as TacticalCharacter } from 'src/app/model/character-context';

@Component({
  selector: 'app-dialog-tactical-character-edition',
  templateUrl: './dialog-tactical-character-edition.component.html',
  styleUrls: ['./dialog-tactical-character-edition.component.scss']
})
export class DialogTacticalCharacterEditionComponent implements OnInit {

  character: TacticalCharacter = {} as TacticalCharacter;

  constructor() { }

  ngOnInit(): void {
  }

  loadCharacter(character: TacticalCharacter) {
    this.character = character;
  }

  getBleeding() {
    var result = "0";
    if(this.character.combatStatus.bleeding) {
      result = "";
      for(let value of this.character.combatStatus.bleeding) {
        result += "-" + value.hp + " ";
      }
    }
    return result;
  }

}
