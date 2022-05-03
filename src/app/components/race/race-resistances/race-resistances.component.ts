import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Race } from 'src/app/model/race';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-race-resistances',
  templateUrl: './race-resistances.component.html',
  styleUrls: ['./race-resistances.component.scss']
})
export class RaceResistancesComponent implements OnInit {

  @Input() race?: Race;
  skills: NamedKey[] = [];
  dataSource = new MatTableDataSource<NamedKey>();
  displayedColumns = ["resistance", "bonus"];
  
  constructor() { }

  ngOnInit(): void {
    console.log("RB: ", this.race?.resistanceBonus);
    if (this.race && this.race.resistanceBonus) {
      const tmp = this.race.resistanceBonus;
      Object.keys(tmp).map(key => {
        const value = "" + tmp[key];
        this.skills.push({ key: key, name: value });
      });
      this.dataSource.data = this.skills;
    }
  }

}
