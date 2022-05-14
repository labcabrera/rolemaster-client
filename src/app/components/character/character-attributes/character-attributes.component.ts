import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorService } from 'src/app/services/error.service';

import { CharacterAttribute, CharacterInfo } from '../../../model/character-info';

interface AttributeRecord {
  attribute: string;
  currentValue: number;
  potentialValue: number;
  bonusAttribute: number;
  bonusRace: number;
  bonusSpecial: number;
  totalBonus: number;
}

@Component({
  selector: 'app-character-attributes',
  templateUrl: './character-attributes.component.html',
  styleUrls: ['./character-attributes.component.scss']
})
export class CharacterAttributesComponent implements OnInit {

  @Input() characterInfo?: CharacterInfo;

  attributes: AttributeRecord[] = [];
  dataSource = new MatTableDataSource<AttributeRecord>();

  displayedColumns = ["attribute", "currentValue", "potentialValue", "bonusAttribute", "bonusRace", "bonusSpecial", "totalBonus", "options"];

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    if (!this.characterInfo) {
      return;
    }
    this.attributes = [];
    const att = this.characterInfo.attributes as any;
    Object.keys(att).forEach(e => {
      const attribute = att[e] as CharacterAttribute;
      var i: AttributeRecord = {
        attribute: e,
        currentValue: attribute.currentValue,
        potentialValue: attribute.potentialValue,
        bonusAttribute: attribute.bonus.attribute,
        bonusRace: attribute.bonus.race,
        bonusSpecial: attribute.bonus.special,
        totalBonus: attribute.totalBonus
      };
      this.attributes.push(i);
    });
    this.dataSource.data = this.attributes;
  }

  displayBonus(value: number | undefined): string {
    return value && value != 0 ? "" + value : "";
  }

  openDialogCustomization(att: AttributeRecord) {
    this.errorService.displayError({error: {message: "Not implemented."}})
    
  }

  openDialogUpdateUsingBackgroundOption(att: AttributeRecord) {
    this.errorService.displayError({error: {message: "Not implemented."}})
  }

}
