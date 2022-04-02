import { Component, OnInit, Input } from '@angular/core';

import { CharacterInfo } from '../../model/character-info';

@Component({
  selector: 'app-character-attributes',
  templateUrl: './character-attributes.component.html',
  styleUrls: ['./character-attributes.component.scss']
})
export class CharacterAttributesComponent implements OnInit {

  @Input() characterInfo? : CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
