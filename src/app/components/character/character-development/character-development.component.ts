import { Component, OnInit, Input } from '@angular/core';
import { CharacterInfo } from '../../../model/character-info';

@Component({
  selector: 'app-character-development',
  templateUrl: './character-development.component.html',
  styleUrls: ['./character-development.component.scss']
})
export class CharacterDevelopmentComponent implements OnInit {

  @Input() characterInfo: CharacterInfo;

  constructor() {
    this.characterInfo = {} as CharacterInfo;
  }

  ngOnInit(): void {
  }

}
