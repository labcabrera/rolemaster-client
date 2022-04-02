import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SkillCategory } from 'src/app/model/skill-category';
import { Skill } from 'src/app/model/skill';
import { SkillCategoryService } from 'src/app/services/skill-category.service';
import { SkillService } from 'src/app/services/skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-category-detail',
  templateUrl: './skill-category-detail.component.html',
  styleUrls: ['./skill-category-detail.component.scss']
})
export class SkillCategoryDetailComponent implements OnInit {

  skillCategory: SkillCategory = {} as SkillCategory;
  skills: Skill[] = [];
  
  displayedColumns: string[] = [ "name", "type", "description" ];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>(this.skills);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  skillIcon = environment.skillIcon;

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
      this.dataSource.data = this.skills;
    })
    
  }

}
