import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Race } from 'src/app/model/race';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-race-adolescence-skills',
  templateUrl: './race-adolescence-skills.component.html',
  styleUrls: ['./race-adolescence-skills.component.scss']
})
export class RaceAdolescenceSkillsComponent implements OnInit {

  @Input() race?: Race;
  dataSource = new MatTableDataSource<NamedKey>();
  skills: NamedKey[] = [];
  displayedColumns = ["skill", "ranks"];
  
  constructor() { }

  ngOnInit(): void {
    if (this.race && this.race.adolescenceSkillRanks) {
      const tmp = this.race.adolescenceSkillRanks;
      Object.keys(tmp).map(key => {
        const value = "" + tmp[key];
        this.skills.push({ key: key, name: value });
      });
      this.dataSource.data = this.skills;
    }
  }

}
