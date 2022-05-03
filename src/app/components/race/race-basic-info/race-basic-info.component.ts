import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/model/race';

@Component({
  selector: 'app-race-basic-info',
  templateUrl: './race-basic-info.component.html',
  styleUrls: ['./race-basic-info.component.scss']
})
export class RaceBasicInfoComponent implements OnInit {

  @Input() race?: Race;
  constructor() { }

  ngOnInit(): void {
  }

}
