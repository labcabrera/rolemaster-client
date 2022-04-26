import { Component, OnInit, Input } from '@angular/core';

import { CharacterInfo } from 'src/app/model/character-info';

@Component({
  selector: 'app-character-general-data',
  templateUrl: './character-general-data.component.html',
  styleUrls: ['./character-general-data.component.scss']
})
export class CharacterGeneralDataComponent implements OnInit {

  @Input() characterInfo? : CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
