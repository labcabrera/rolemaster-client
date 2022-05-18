import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterCustomization } from 'src/app/model/character-info';
import { FormControl } from '@angular/forms';

import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent implements OnInit {

  flaws: CharacterCustomization[] = [];
  versionControl = new FormControl('');
  dataSource = new MatTableDataSource<CharacterCustomization>();
  displayedColumns = ["name", "version", "category", "costType", "cost"];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private characterCustomizationService: CharacterCustomizationService,
    private userService: UserService,
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  onVersionChange(version: string) {
    this.loadFlaws(version);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadFlaws(version: string): void {
    this.characterCustomizationService.findByType(version, 'talent').subscribe({
      next: results => {
        this.flaws = results;
        this.dataSource.data = this.flaws;
      },
      error: error => this.errorService.displayError(error)
    });
  }
}
