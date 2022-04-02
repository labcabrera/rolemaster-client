import { Component, OnInit, Input } from '@angular/core';
import { CharacterInfo } from '../../model/character-info';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
