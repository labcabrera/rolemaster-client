import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TrainingPackage } from 'src/app/model/training-packages';
import { NamedKey } from 'src/app/model/commons';

@Component({
  selector: 'app-training-package-fixed-skills',
  templateUrl: './training-package-fixed-skills.component.html',
  styleUrls: ['./training-package-fixed-skills.component.scss']
})
export class TrainingPackageFixedSkillsComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  categories: NamedKey[] = [];
  skills: NamedKey[] = [];

  categoryDataSource = new MatTableDataSource<NamedKey>();
  skillDataSource = new MatTableDataSource<NamedKey>();

  displayedColumns = ["name","ranks"];

  constructor() { }

  
  ngOnInit(): void {
    this.loadDataSources();
  }
  
  private loadDataSources() {
    console.log("Data: ", this.trainingPackage);
    if(this.trainingPackage) {
      if(this.trainingPackage.fixedSkillCategories) {
        this.categories = [];
        for (let key of Object.keys(this.trainingPackage?.fixedSkillCategories)) {
          this.categories.push({key: key, name: this.trainingPackage?.fixedSkillCategories[key]});
        }
        this.categoryDataSource.data = this.categories;
      }
      if(this.trainingPackage.fixedSkills) {
        this.skills = [];
        for (let key of Object.keys(this.trainingPackage?.fixedSkills)) {
          this.skills.push({key: key, name: this.trainingPackage?.fixedSkills[key]});
        }
        this.skillDataSource.data = this.skills;
      }
    }
  }

}
