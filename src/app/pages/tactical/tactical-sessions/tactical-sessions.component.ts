import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { TacticalSession } from 'src/app/model/session';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { ErrorService } from 'src/app/services/error.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private tacticalSessionService: TacticalSessionService,
    private errorService: ErrorService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTacticalSessions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }
  
  getTacticalSessions() {
    this.tacticalSessionService.find().subscribe(s => {
      this.tacticalSessions = s;
      this.dataSource.data = this.tacticalSessions;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
