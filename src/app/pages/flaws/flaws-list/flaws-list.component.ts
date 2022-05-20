import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

import { CharacterCustomization } from 'src/app/model/character-info';
import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-flaws-list',
  templateUrl: './flaws-list.component.html',
  styleUrls: ['./flaws-list.component.scss']
})
export class FlawsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  flaws: CharacterCustomization[] = [];
  dataSource = new MatTableDataSource<CharacterCustomization>();
  displayedColumns = ["name", "version", "category", "cost-type", "cost"];
  versionControl = new FormControl('');

  constructor(
    private userService: UserService,
    private characterCustomizationService: CharacterCustomizationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.userService.findUser().subscribe({
      next: result => {
        const version = result.defaultVersion ? result.defaultVersion : '';
        this.versionControl.setValue(version)
        this.loadFlaws(version);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  onVersionChange(version: string) {
    this.loadFlaws(version);
  }

  private loadFlaws(version: string): void {
    this.characterCustomizationService.findByType(version, 'flaw').subscribe({
      next: results => {
        this.flaws = results;
        this.dataSource.data = this.flaws;
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

}
