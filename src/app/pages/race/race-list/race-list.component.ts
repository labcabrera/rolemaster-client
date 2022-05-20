import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Race } from '../../../model/race';
import { RaceService } from '../../../services/race.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit, AfterViewInit {

  races: Race[] = [];
  displayedColumns: string[] = ["name", "version", "universes"];
  dataSource: MatTableDataSource<Race> = new MatTableDataSource<Race>(this.races);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  versionControl = new FormControl('');

  constructor(
    private skillService: RaceService,
    private userService: UserService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.userService.findUser().subscribe({
      next: result => {
        const version = result.defaultVersion ? result.defaultVersion : '';
        this.versionControl.setValue(version)
        this.getRaces(version);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  onVersionChange(version: string) {
    this.getRaces(version);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getRaces(version: string): void {
    console.log(version);
    this.skillService.find(version, '').subscribe({
      next: result => {
        this.races = result;
        this.dataSource.data = this.races;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
