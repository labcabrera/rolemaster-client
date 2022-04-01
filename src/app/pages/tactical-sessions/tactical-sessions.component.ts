import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionsService } from 'src/app/services/tactical-sessions.service';

@Component({
  selector: 'app-tactical-sessions',
  templateUrl: './tactical-sessions.component.html',
  styleUrls: ['./tactical-sessions.component.scss']
})
export class TacticalSessionsComponent implements OnInit, AfterViewInit {

  tacticalSessions?: TacticalSession[];
  displayedColumns: string[] = ["id", "name", "created", "modified" ];
  dataSource: MatTableDataSource<TacticalSession> = new MatTableDataSource<TacticalSession>(this.tacticalSessions);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor( private tacticalSessionService: TacticalSessionsService) { }

  ngOnInit(): void {
    this.getTacticalSessions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }
  
  getTacticalSessions() {
    this.tacticalSessionService.findTacticalSessions().subscribe(s => {
      this.tacticalSessions = s;
      this.dataSource.data = this.tacticalSessions;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
