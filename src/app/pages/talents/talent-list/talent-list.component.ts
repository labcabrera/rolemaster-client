import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterCustomization } from 'src/app/model/character-info';

import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent implements OnInit {

  flaws: CharacterCustomization[] = [];
  dataSource = new MatTableDataSource<CharacterCustomization>();
  displayedColumns = ["name", "category", "costType", "cost"];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private characterCustomizationService: CharacterCustomizationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.loadFlaws();
  }

  private loadFlaws(): void {
    this.characterCustomizationService.findByType('talent').subscribe({
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
