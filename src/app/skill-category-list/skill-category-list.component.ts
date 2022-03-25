import { Component, OnInit } from '@angular/core';
import { SkillCategory } from '../model/skill-category';
import { SkillCategoryService } from '../services/skill-category.service';

@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit {

  skillCategories?: SkillCategory[];

  constructor(private skillCategoryService: SkillCategoryService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillCategoryService.getSkillCategories().subscribe(result => this.skillCategories = result);
  }

}
