import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Race } from 'src/app/model/race';
import { NamedKey } from 'src/app/model/commons';
@Component({
  selector: 'app-race-attributes',
  templateUrl: './race-attributes.component.html',
  styleUrls: ['./race-attributes.component.scss']
})
export class RaceAttributesComponent implements OnInit {

  @Input() race?: Race;

  dataSource = new MatTableDataSource<NamedKey>();
  skills: NamedKey[] = [];
  displayedColumns = ["attribute", "modifier"];
  
  constructor() { }

  ngOnInit(): void {
    if (this.race && this.race.attributeModifiers) {
      const tmp = this.race.attributeModifiers;
      Object.keys(tmp).map(key => {
        const value = "" + tmp[key];
        this.skills.push({ key: key, name: value });
      });
      this.dataSource.data = this.skills;
    }
  }

  

}
