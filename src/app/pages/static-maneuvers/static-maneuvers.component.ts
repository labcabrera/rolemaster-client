import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ManeuverService } from 'src/app/services/maneuver.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-static-maneuvers',
  templateUrl: './static-maneuvers.component.html',
  styleUrls: ['./static-maneuvers.component.scss']
})
export class StaticManeuversComponent implements OnInit {

  maneuverForm: FormGroup;
  maneuverResult: any;

  constructor(
    private maneuverService: ManeuverService,
    private errorService: ErrorService,
    private fb: FormBuilder) {
      this.maneuverForm = this.fb.group({
        roll: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  execute() {
    this.maneuverService.executeStaticManeuver(this.maneuverForm.value).subscribe({
      next: result => this.maneuverResult = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
