import { Component, OnInit } from '@angular/core';
import { TacticalCharacterContext as TacticalCharacter } from 'src/app/model/character-context';

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
      for(var i =0 ; i < this.character.combatStatus.bleeding.length; i++) {
        result += "-" + this.character.combatStatus.bleeding[i].hp + " ";
      }
    }
    return result;
  }

}
