import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Profession } from '../../model/profession';
import { ProfessionService } from '../../services/profession.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.scss']
})
export class ProfessionListComponent implements OnInit, AfterViewInit {

  professions: Profession[] = [];

  displayedColumns: string[] = [ "id", "name", "availableRealms" ];
  dataSource: MatTableDataSource<Profession> = new MatTableDataSource<Profession>(this.professions);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private professionService: ProfessionService) { }

  ngOnInit(): void {
    this.getProfessions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
    console.log("p: " , this.paginator);
    console.log("s: ", this.sort);
  }

  getProfessions(): void {
    this.professionService.getProfessions().subscribe(result => {
      this.professions = result;
      this.dataSource.data = this.professions;
    });
  }

  applyFilter(event: Event) {
    console.log("filtering: ", event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
