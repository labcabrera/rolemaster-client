import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SkillCategory } from 'src/app/model/skill-category';
import { Skill } from 'src/app/model/skill';
import { SkillCategoryService } from 'src/app/services/skill-category.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-category-detail',
  templateUrl: './skill-category-detail.component.html',
  styleUrls: ['./skill-category-detail.component.scss']
})
export class SkillCategoryDetailComponent implements OnInit {

  skillCategory: SkillCategory = {} as SkillCategory;
  skills: Skill[] = [];

  constructor(
    private skillCategoryService: SkillCategoryService,
    private skillService: SkillService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSkillCategory();
  }

  getSkillCategory() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.skillCategoryService.findById(id).subscribe(result => {
      this.skillCategory = result;
    });
    this.skillService.getSkillsByCategoryId(id).subscribe(result => {
      this.skills = result;
    })
    
  }

}
