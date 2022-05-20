import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SkillCategory } from '../../../model/skill-category';
import { SkillCategoryService } from '../../../services/skill-category.service';
import { ErrorService } from 'src/app/services/error.service';
import { EnumService } from 'src/app/services/enum.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit, AfterViewInit {

  skillCategories?: SkillCategory[];

  versionControl = new FormControl('');

  displayedColumns: string[] = ["name", "version", "group", "attributes", "progression-type"];
  dataSource: MatTableDataSource<SkillCategory> = new MatTableDataSource<SkillCategory>(this.skillCategories);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private userService: UserService,
    private skillCategoryService: SkillCategoryService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.userService.findUser().subscribe({
      next: result => {
        const version = result.defaultVersion ? result.defaultVersion : '';
        this.versionControl.setValue(version)
        this.loadSkillCategories(version);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onVersionChange(version: string) {
    this.loadSkillCategories(version);
  }

  private loadSkillCategories(version: string): void {
    this.skillCategoryService.getSkillCategories(version).subscribe({
      next: result => {
        this.skillCategories = result;
        this.dataSource.data = this.skillCategories;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
