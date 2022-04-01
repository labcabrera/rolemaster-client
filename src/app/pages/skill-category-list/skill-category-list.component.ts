import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SkillCategory } from '../../model/skill-category';
import { SkillCategoryService } from '../../services/skill-category.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit, AfterViewInit {

  skillCategories?: SkillCategory[];

  displayedColumns: string[] = ["id", "name", "attributeBonus", "description" ];
  dataSource: MatTableDataSource<SkillCategory> = new MatTableDataSource<SkillCategory>(this.skillCategories);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private skillCategoryService: SkillCategoryService) { }

  ngOnInit(): void {
    this.getSkillCategories();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getSkillCategories(): void {
    this.skillCategoryService.getSkillCategories().subscribe(result => {
      this.skillCategories = result;
      this.dataSource.data = this.skillCategories;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
