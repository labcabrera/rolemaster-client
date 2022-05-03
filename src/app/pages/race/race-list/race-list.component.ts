import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Race } from '../../../model/race';
import { RaceService } from '../../../services/race.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit, AfterViewInit {

  races?: Race[];

  displayedColumns: string[] = [ "name", "keywords", "universes" ];
  dataSource: MatTableDataSource<Race> = new MatTableDataSource<Race>(this.races);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private skillService: RaceService) { }

  ngOnInit(): void {
    this.getRaces();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getRaces(): void {
    this.skillService.find().subscribe(result => {
      this.races = result;
      this.dataSource.data = this.races;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
