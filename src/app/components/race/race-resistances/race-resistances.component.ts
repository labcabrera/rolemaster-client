import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/model/race';

@Component({
  selector: 'app-race-resistances',
  templateUrl: './race-resistances.component.html',
  styleUrls: ['./race-resistances.component.scss']
})
export class RaceResistancesComponent implements OnInit {

  @Input() race?: Race;
  
  constructor() { }

  ngOnInit(): void {
  }

}
