import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Race } from 'src/app/model/race';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  race: Race = {} as Race;

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const raceId = String(this.route.snapshot.paramMap.get('id'));
    this.loadRace(raceId);
  }

  loadRace(raceId: string) {
    this.raceService.findById(raceId).subscribe(result => {
      this.race = result;
    });
  }

}
