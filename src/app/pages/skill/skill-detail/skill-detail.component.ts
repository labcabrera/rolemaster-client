import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Skill } from 'src/app/model/skill';
import { SkillCategory } from 'src/app/model/skill-category';
import { ErrorService } from 'src/app/services/error.service';
import { SkillCategoryService } from 'src/app/services/skill-category.service';
import { SkillService } from 'src/app/services/skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {

  skill: Skill = {} as Skill;
  skillCategory: SkillCategory = {} as SkillCategory;

  constructor(
    private skillService: SkillService,
    private skillCategoryService: SkillCategoryService,
    private errorService: ErrorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  loadSkill() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    const index = id.indexOf(":");
    const skillId = index < 0 ? id : id.substring(0, index);
    this.skillService.findById(skillId).subscribe({
      next: result => {
        this.skill = result;
        this.loadSkillCategory(this.skill.categoryId);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  loadSkillCategory(id: string) {
    this.skillCategoryService.findById(id).subscribe({
      next: result => {
        this.skillCategory = result;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
