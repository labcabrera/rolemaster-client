import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-tactical-sessions',
  templateUrl: './tactical-sessions.component.html',
  styleUrls: ['./tactical-sessions.component.scss']
})
export class TacticalSessionsComponent implements OnInit, AfterViewInit {

  tacticalSessions?: TacticalSession[];
  displayedColumns: string[] = ["name"];
  dataSource: MatTableDataSource<TacticalSession> = new MatTableDataSource<TacticalSession>(this.tacticalSessions);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.getTacticalSessions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getTacticalSessions() {
    this.tacticalSessionService.find().subscribe({
      next: results => {
        this.tacticalSessions = results;
        this.dataSource.data = this.tacticalSessions;
      },
      error: error => {
        this.errorService.displayError(error);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
