import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { NamedKey } from 'src/app/model/commons';
import { Profession } from 'src/app/model/profession';

@Component({
  selector: 'app-profession-skill-cost',
  templateUrl: './profession-skill-cost.component.html',
  styleUrls: ['./profession-skill-cost.component.scss']
})
export class ProfessionSkillCostComponent implements OnInit, AfterViewInit {

  @Input() profession?: Profession;
  dataSource = new MatTableDataSource<NamedKey>();
  costs: NamedKey[] = [];
  displayedColumns = ["category", "cost"];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    if (this.profession && this.profession.skillCategoryDevelopmentCost) {
      const tmp = this.profession.skillCategoryDevelopmentCost;
      Object.keys(tmp).map(key => {
        const value = "" + tmp[key];
        this.costs.push({ key: key, name: value });
      });
      this.dataSource.data = this.costs;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

}
