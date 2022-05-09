import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrainingPackage } from 'src/app/model/training-packages';
import { TrainingPackageService } from 'src/app/services/training-packages.service';

@Component({
  selector: 'app-training-package',
  templateUrl: './training-package.component.html',
  styleUrls: ['./training-package.component.scss']
})
export class TrainingPackageComponent implements OnInit {

  trainingPackage: TrainingPackage = {} as TrainingPackage;

  constructor(
    private trainingPackageService: TrainingPackageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.loadTrainingPackage(id);
  }

  loadTrainingPackage(id: string) {
    this.trainingPackageService.findById(id).subscribe(result => {
      this.trainingPackage = result;
    });
  }

}
