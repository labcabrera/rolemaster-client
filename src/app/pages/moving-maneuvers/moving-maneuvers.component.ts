import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as e from 'express';
import { NamedKey } from 'src/app/model/commons';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';
import { ManeuverService } from 'src/app/services/maneuver.service';

@Component({
  selector: 'app-moving-maneuvers',
  templateUrl: './moving-maneuvers.component.html',
  styleUrls: ['./moving-maneuvers.component.scss']
})
export class MovingManeuversComponent implements OnInit {

  maneuverForm: FormGroup;
  maneuverResult: any;

  difficulties: NamedKey[] = [];

  constructor(
    private maneuverService: ManeuverService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
      this.maneuverForm = this.fb.group({
        roll: ['', Validators.required],
        difficulty: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.enumService.findManeuverDifficulties().subscribe({
      next: results => this.difficulties = results.filter(e => e.key != 'none'),
      error: error => this.errorService.displayError(error)
    });
  }

  execute() {
    this.maneuverService.executeMovingManeuver(this.maneuverForm.value).subscribe({
      next: result => this.maneuverResult = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
