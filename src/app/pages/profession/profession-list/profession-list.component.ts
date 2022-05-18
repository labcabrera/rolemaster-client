import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

import { Profession } from '../../../model/profession';
import { ProfessionService } from '../../../services/profession.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.scss']
})
export class ProfessionListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  professions: Profession[] = [];
  displayedColumns: string[] = ["name", "availableRealms"];
  dataSource: MatTableDataSource<Profession> = new MatTableDataSource<Profession>(this.professions);
  versionControl = new FormControl('');

  constructor(
    private professionService: ProfessionService,
    private userService: UserService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.userService.findUser().subscribe({
      next: result => {
        const version = result.defaultVersion ? result.defaultVersion : '';
        this.versionControl.setValue(version)
        this.getProfessions(version);
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
    this.getProfessions(version);
  }

  private getProfessions(version: string): void {
    this.professionService.getProfessions(version).subscribe({
      next: result => {
        this.professions = result;
        this.dataSource.data = this.professions;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
