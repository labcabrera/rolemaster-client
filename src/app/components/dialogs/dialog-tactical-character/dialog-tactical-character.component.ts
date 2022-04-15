import { Component, OnInit } from '@angular/core';
import { TacticalCharacterContext } from 'src/app/model/character-context';

@Component({
  selector: 'app-dialog-tactical-character',
  templateUrl: './dialog-tactical-character.component.html',
  styleUrls: ['./dialog-tactical-character.component.scss']
})
export class DialogTacticalCharacterComponent implements OnInit {

  character: TacticalCharacterContext = {} as TacticalCharacterContext;

  constructor() { }

  ngOnInit(): void {
  }

  load(character: TacticalCharacterContext) {
    this.character = character;
  }

}
