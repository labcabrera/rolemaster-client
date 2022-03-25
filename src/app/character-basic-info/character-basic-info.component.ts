import { Component, OnInit, Input } from '@angular/core';

import { CharacterInfo } from '../model/character-info';

@Component({
  selector: 'app-character-basic-info',
  templateUrl: './character-basic-info.component.html',
  styleUrls: ['./character-basic-info.component.scss']
})
export class CharacterBasicInfoComponent implements OnInit {

  @Input() characterInfo? : CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
