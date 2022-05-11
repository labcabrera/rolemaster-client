import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-customizable-skill',
  templateUrl: './training-package-customizable-skill.component.html',
  styleUrls: ['./training-package-customizable-skill.component.scss']
})
export class TrainingPackageCustomizableSkillComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  displayedColumns = ["skill", "ranks"];

  dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    if (!this.trainingPackage) {
      return;
    }
    this.dataSource.data = this.trainingPackage.selectableSkillCustomizations;
  }

}
