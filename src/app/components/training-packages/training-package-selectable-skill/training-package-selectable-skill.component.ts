import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-selectable-skill',
  templateUrl: './training-package-selectable-skill.component.html',
  styleUrls: ['./training-package-selectable-skill.component.scss']
})
export class TrainingPackageSelectableSkillComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  displayedColumns = ["description", "key", "ranks", "skills"];

  dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    if (!this.trainingPackage) {
      return;
    }
    this.dataSource.data = this.trainingPackage.selectableSkillList;
  }

}
