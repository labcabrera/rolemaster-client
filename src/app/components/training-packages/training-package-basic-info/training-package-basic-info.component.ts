import { Component, Input, OnInit } from '@angular/core';

import { TrainingPackage } from 'src/app/model/training-packages';

@Component({
  selector: 'app-training-package-basic-info',
  templateUrl: './training-package-basic-info.component.html',
  styleUrls: ['./training-package-basic-info.component.scss']
})
export class TrainingPackageBasicInfoComponent implements OnInit {

  @Input() trainingPackage?: TrainingPackage;

  constructor() { }

  ngOnInit(): void {
  }

}
