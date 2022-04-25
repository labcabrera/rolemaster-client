import { Component, OnInit } from '@angular/core';
import { TacticalCharacter } from 'src/app/model/character-context';

@Component({
  selector: 'app-dialog-tactical-character',
  templateUrl: './dialog-tactical-character.component.html',
  styleUrls: ['./dialog-tactical-character.component.scss']
})
export class DialogTacticalCharacterComponent implements OnInit {

  character: TacticalCharacter = {} as TacticalCharacter;

  constructor() { }

  ngOnInit(): void {
  }

  load(character: TacticalCharacter) {
    this.character = character;
  }

}
