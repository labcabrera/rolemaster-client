import { Component, OnInit } from '@angular/core';

import { CharacterItem } from 'src/app/model/item';

@Component({
  selector: 'app-dialog-item-customization',
  templateUrl: './dialog-item-customization.component.html',
  styleUrls: ['./dialog-item-customization.component.scss']
})
export class DialogItemCustomizationComponent implements OnInit {

  characterItem: CharacterItem = {} as CharacterItem;

  constructor() { }

  ngOnInit(): void {
  }

  load(characterItem: CharacterItem) {
    this.characterItem = characterItem;
  }

}
