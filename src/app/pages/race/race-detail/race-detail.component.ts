import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Race } from 'src/app/model/race';
import { ErrorService } from 'src/app/services/error.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  race?: Race;

  constructor(
    private raceService: RaceService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const raceId = String(this.route.snapshot.paramMap.get('id'));
    this.loadRace(raceId);
  }

  loadRace(raceId: string) {
    this.raceService.findById(raceId).subscribe({
      next: result => this.race = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
