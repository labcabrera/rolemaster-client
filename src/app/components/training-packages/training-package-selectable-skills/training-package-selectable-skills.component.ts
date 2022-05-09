import { Component, OnInit, Input } from '@angular/core';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-selectable-skills',
  templateUrl: './training-package-selectable-skills.component.html',
  styleUrls: ['./training-package-selectable-skills.component.scss']
})
export class TrainingPackageSelectableSkillsComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  constructor() { }

  ngOnInit(): void {
  }

}
