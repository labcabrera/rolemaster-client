import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Profession } from 'src/app/model/profession';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-profession-skill-category-bonus',
  templateUrl: './profession-skill-category-bonus.component.html',
  styleUrls: ['./profession-skill-category-bonus.component.scss']
})
export class ProfessionSkillCategoryBonusComponent implements OnInit, AfterViewInit {

  @Input() profession?: Profession;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  dataSource = new MatTableDataSource<NamedKey>();
  costs: NamedKey[] = [];
  displayedColumns = ["category", "bonus"];

  ngOnInit(): void {
    if (this.profession && this.profession.skillCategoryBonus) {
      const tmp = this.profession.skillCategoryBonus;
      Object.keys(tmp).forEach(key => {
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
