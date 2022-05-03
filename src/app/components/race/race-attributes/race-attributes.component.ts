import { Component, OnInit, Input } from '@angular/core';
import { Race } from 'src/app/model/race';

@Component({
  selector: 'app-race-attributes',
  templateUrl: './race-attributes.component.html',
  styleUrls: ['./race-attributes.component.scss']
})
export class RaceAttributesComponent implements OnInit {

  @Input() race?: Race;

  constructor() { }

  ngOnInit(): void {
  }

  

}
