import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Profession } from 'src/app/model/profession';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-profession-weapon-cost',
  templateUrl: './profession-weapon-cost.component.html',
  styleUrls: ['./profession-weapon-cost.component.scss']
})
export class ProfessionWeaponCostComponent implements OnInit, AfterViewInit {

  @Input() profession?: Profession;
  dataSource = new MatTableDataSource<number[]>();
  costs: NamedKey[] = [];
  displayedColumns = ["position", "cost"];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    if (this.profession && this.profession.skillCategoryWeaponDevelopmentCost) {
      this.dataSource.data = this.profession.skillCategoryWeaponDevelopmentCost;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

}
