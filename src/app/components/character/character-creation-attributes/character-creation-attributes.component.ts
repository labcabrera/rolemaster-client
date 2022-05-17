import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Race } from 'src/app/model/race';
import { CharacterGenerationUtilsService } from 'src/app/services/character-generation-utils.service';
import { ErrorService } from 'src/app/services/error.service';
import { RaceService } from 'src/app/services/race.service';

interface CharacterAttributeMap {
  [key: string]: any;
}
@Component({
  selector: 'app-character-creation-attributes',
  templateUrl: './character-creation-attributes.component.html',
  styleUrls: ['./character-creation-attributes.component.scss']
})
export class CharacterCreationAttributesComponent implements OnInit {

  @Input() version?: string;
  @Input() raceId?: string;

  @Output() onChangeAttribute = new EventEmitter<string>();

  dataSource = new MatTableDataSource<any>();

  totalCost = 0;
  availableCost = 0;
  attributes: any[] = [
    { 'attribute': 'ag', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'co', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'me', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 're', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'sd', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'em', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'in', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'pr', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'qu', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
    { 'attribute': 'st', 'currentValue': 0, 'potentialValue': 0, 'bonusRace': 0, 'bonusAttribute': 0, 'totalBonus': 0, 'cost': 0 },
  ];
  displayedColumns = ['attribute', 'current-value', 'potential-value', 'bonus-attribute', 'bonus-race', 'cost', 'currentValueSlider', 'currentValueButtons'];


  constructor(
    private characterCreationUtilService: CharacterGenerationUtilsService,
    private raceService: RaceService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

  loadVersion(version: string): void {
    var defaultValue = 0;
    var defaultCost = 0;
    if (version === 'rmss') {
      defaultValue = 66;
      defaultCost = 66;
      this.availableCost = 660;
      this.totalCost = 660;
    } else if (version === 'rmu') {
      defaultValue = 59;
      defaultCost = 1;
      this.totalCost = 10;
      this.availableCost = 10;
    }
    this.attributes.forEach(e => {
      e.currentValue = defaultValue;
      e.cost = defaultCost,
        e.bonusAttribute = 0;
    });
    this.dataSource.data = this.attributes;
  }

  loadRace(raceId: string): void {
    this.raceService.findById(raceId).subscribe({
      next: result => this.loadRaceBonus(result),
      error: error => this.errorService.displayError(error)
    });
  }

  updateAttribute(attribute: string) {
    this.onChangeAttribute.emit(this.attributes.filter(e => e.attribute === attribute)[0]);
    var attributes: CharacterAttributeMap = {};
    this.attributes.forEach(e => attributes[e.attribute] = e.currentValue);
    const request = {
      version: this.version!,
      attributes: attributes
    };
    this.characterCreationUtilService.calculateAttributeModifiers(request).subscribe({
      next: result => this.loadAttributeModifiersResponse(result),
      error: error => this.errorService.displayError(error)
    });
  }

  incrementValue(attribute: string, increment: number) {
    const att = this.attributes.filter(e => e.attribute === attribute)[0];
    att.currentValue = att.currentValue + increment;
    this.updateAttribute(attribute);
  }

  private loadRaceBonus(race: Race) {
    Object.keys(race.attributeModifiers).forEach(key => {
      const bonusRace = race.attributeModifiers[key];
      const att = this.attributes.filter(e => e.attribute === key)[0];
      att['bonusRace'] = bonusRace;
      att['totalBonus'] = bonusRace + att['bonusAttribute'];
    });
  }

  private loadAttributeModifiersResponse(response: any) {
    this.totalCost = response.totalCost;
    Object.keys(response.attributes).forEach(attName => {
      const att = this.attributes.filter(e => e.attribute === attName)[0];
      const cost = response.attributes[attName].cost;
      const attBonus = response.attributes[attName].attributeBonus;
      att.cost = cost;
      att.bonusAttribute = attBonus;
    });
    this.dataSource.data = this.attributes;
  }

}
