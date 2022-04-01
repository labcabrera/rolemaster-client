import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { Skill } from '../../model/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [];

  displayedColumns: string[] = ["id", "name", "categoryId", "description"];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>(this.skills);

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe(result => {
      this.skills = result;
      this.dataSource.data = this.skills;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
