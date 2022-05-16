import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Race } from 'src/app/model/race';
import { ErrorService } from 'src/app/services/error.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-character-creation-attributes',
  templateUrl: './character-creation-attributes.component.html',
  styleUrls: ['./character-creation-attributes.component.scss']
})
export class CharacterCreationAttributesComponent implements OnInit {

  @Input() version?: string;
  @Input() raceId?: string;

  @Output() onChangeAttribute = new EventEmitter<string>();


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

  displayedColumns = ['attribute', 'currentValue', 'potentialValue', 'bonusRace', 'bonusAttribute', 'totalBonus', 'currentValueSlider', 'currentValueButtons'];

  dataSource = new MatTableDataSource<any>();

  constructor(
    private raceService: RaceService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

  loadVersion(version: string): void {
    var defaultValue = 0;
    if(version === 'rmss') {
      defaultValue = 66;
    } else if(version === 'rmu') {
      defaultValue = 50;
    }
    this.attributes.forEach(e => {
      e.currentValue = defaultValue;
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
  }

  incrementValue(attribute: string, increment: number) {
    const att = this.attributes.filter(e => e.attribute === attribute)[0];
    att.currentValue = att.currentValue + increment;
    this.onChangeAttribute.emit(att);
  }

  private loadRaceBonus(race: Race) {
    Object.keys(race.attributeModifiers).forEach(key => {
      const bonusRace = race.attributeModifiers[key];
      const att = this.attributes.filter(e => e.attribute === key)[0];
      att['bonusRace'] = bonusRace;
      att['totalBonus'] = bonusRace + att['bonusAttribute'];
    });
  }

}
