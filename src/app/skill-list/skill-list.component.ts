import { Component, OnInit } from '@angular/core';

import { Skill } from '../model/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  skills?: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe(result => this.skills = result);
  }

}
