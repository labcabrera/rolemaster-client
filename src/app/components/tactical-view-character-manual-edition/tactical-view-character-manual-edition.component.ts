import { Component, OnInit } from '@angular/core';
import { TacticalCharacterContext } from 'src/app/model/character-context';

@Component({
  selector: 'app-tactical-view-character-manual-edition',
  templateUrl: './tactical-view-character-manual-edition.component.html',
  styleUrls: ['./tactical-view-character-manual-edition.component.scss']
})
export class TacticalViewCharacterManualEditionComponent implements OnInit {

  character: TacticalCharacterContext = {} as TacticalCharacterContext;

  constructor() { }

  ngOnInit(): void {
  }

  loadCharacter(character: TacticalCharacterContext) {
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
