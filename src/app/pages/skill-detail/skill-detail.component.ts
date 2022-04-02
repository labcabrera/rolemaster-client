import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {

  skill: Skill = {} as Skill;
  skillIcon = environment.skillIcon;

  constructor(
    private skillService: SkillService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.skillService.findById(id).subscribe(result => {
      this.skill = result;
    });
  }

}
