import { Component, Input, OnInit } from '@angular/core';
import { CharacterInfo } from 'src/app/model/character-info';

@Component({
  selector: 'app-character-basic-info',
  templateUrl: './character-basic-info.component.html',
  styleUrls: ['./character-basic-info.component.scss']
})
export class CharacterBasicInfoComponent implements OnInit {

  @Input() character?: CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
