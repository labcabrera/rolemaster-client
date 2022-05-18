import { Component, Input } from '@angular/core';
import { CharacterInfo } from 'src/app/model/character-info';

@Component({
  selector: 'app-character-basic-info',
  templateUrl: './character-basic-info.component.html',
  styleUrls: ['./character-basic-info.component.scss']
})
export class CharacterBasicInfoComponent {

  @Input() character?: CharacterInfo;

}
