import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/model/race';

@Component({
  selector: 'app-race-adolescence-skills',
  templateUrl: './race-adolescence-skills.component.html',
  styleUrls: ['./race-adolescence-skills.component.scss']
})
export class RaceAdolescenceSkillsComponent implements OnInit {

  @Input() race?: Race;
  
  constructor() { }

  ngOnInit(): void {
  }

}
