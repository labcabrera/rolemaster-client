import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CharacterAttribute, CharacterInfo } from '../../../model/character-info';

@Component({
  selector: 'app-character-attributes',
  templateUrl: './character-attributes.component.html',
  styleUrls: ['./character-attributes.component.scss']
})
export class CharacterAttributesComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  dataSource = new MatTableDataSource<CharacterAttribute>();

  constructor() { }

  ngOnInit(): void {
  }

  displayBonus(value: number | undefined): string {
    return value && value != 0 ? "" + value : "";
  }

}
