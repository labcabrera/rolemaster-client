import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Skill } from '../../../model/skill';
import { SkillService } from '../../../services/skill.service';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [];

  displayedColumns: string[] = ["name", "categoryId", "type", "progressionType", "description"];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>(this.skills);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private skillService: SkillService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.getSkills();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe({
      next: result => {
        this.skills = result;
        this.dataSource.data = this.skills;
      },
      error: error => this.errorService.displayError(error)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
