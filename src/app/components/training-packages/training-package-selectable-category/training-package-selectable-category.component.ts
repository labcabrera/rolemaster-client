import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-selectable-category',
  templateUrl: './training-package-selectable-category.component.html',
  styleUrls: ['./training-package-selectable-category.component.scss']
})
export class TrainingPackageSelectableCategoryComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  displayedColumns = ["description", "key", "group", "ranks"];

  dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    if(!this.trainingPackage) {
      return;
    }
    this.dataSource.data = this.trainingPackage.selectableSkillCategoryList;
  }

}
