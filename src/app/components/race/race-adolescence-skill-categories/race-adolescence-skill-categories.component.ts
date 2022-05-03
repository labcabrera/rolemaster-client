import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Race } from 'src/app/model/race';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-race-adolescence-skill-categories',
  templateUrl: './race-adolescence-skill-categories.component.html',
  styleUrls: ['./race-adolescence-skill-categories.component.scss']
})
export class RaceAdolescenceSkillCategoriesComponent implements OnInit {

  @Input() race?: Race;
  dataSource = new MatTableDataSource<NamedKey>();
  categories: NamedKey[] = [];
  displayedColumns = ["category", "ranks"];

  constructor() { }

  ngOnInit(): void {
    if (this.race && this.race.adolescenceSkillCategoryRanks) {
      const tmp = this.race.adolescenceSkillCategoryRanks;
      Object.keys(tmp).map(key => {
        const value = "" + tmp[key];
        this.categories.push({ key: key, name: value });
      });
      this.dataSource.data = this.categories;
    }
  }

}
