import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SkillCategory } from 'src/app/model/skill-category';
import { Skill } from 'src/app/model/skill';
import { SkillCategoryService } from 'src/app/services/skill-category.service';
import { SkillService } from 'src/app/services/skill.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-skill-category-detail',
  templateUrl: './skill-category-detail.component.html',
  styleUrls: ['./skill-category-detail.component.scss']
})
export class SkillCategoryDetailComponent implements OnInit {

  skillCategory: SkillCategory = {} as SkillCategory;
  skills: Skill[] = [];
  displayedColumns: string[] = ["name", "type", "progressionType", "description"];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>(this.skills);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private skillCategoryService: SkillCategoryService,
    private skillService: SkillService,
    private errorService: ErrorService,
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
    this.skillService.getSkillsByCategoryId(id).subscribe({
      next: result => {
        this.skills = result;
        this.dataSource.data = this.skills;
      },
      error: error => this.errorService.displayError(error)
    })

  }

}
