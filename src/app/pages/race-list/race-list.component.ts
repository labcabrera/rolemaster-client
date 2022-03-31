import { Component, OnInit } from '@angular/core';
import { Race } from '../../model/race';
import { RaceService } from '../../services/race.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races?: Race[];

  constructor(private skillService: RaceService) { }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(): void {
    this.skillService.getRaces().subscribe(result => this.races = result);
  }

}
