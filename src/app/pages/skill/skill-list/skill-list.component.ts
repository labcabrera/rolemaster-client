import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

import { Skill } from '../../../model/skill';
import { SkillService } from '../../../services/skill.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [];

  versionControl = new FormControl('');

  displayedColumns: string[] = ["name", "version", "categoryId", "type", "progressionType"];
  dataSource: MatTableDataSource<Skill> = new MatTableDataSource<Skill>(this.skills);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private skillService: SkillService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.loadSkills('');
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
    this.loadSkills(version);
  }

  private loadSkills(version: string): void {
    this.skillService.getSkills(version).subscribe({
      next: result => {
        this.skills = result;
        this.dataSource.data = this.skills;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
