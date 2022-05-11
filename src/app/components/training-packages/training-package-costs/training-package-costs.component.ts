import { Component, Input, OnInit } from '@angular/core';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-costs',
  templateUrl: './training-package-costs.component.html',
  styleUrls: ['./training-package-costs.component.scss']
})
export class TrainingPackageCostsComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  constructor() { }

  ngOnInit(): void {
  }

}
