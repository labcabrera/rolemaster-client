import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { StrategicSession } from '../../model/session';
import { StrategicSessionsService } from '../../services/strategic-sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './strategic-sessions.component.html',
  styleUrls: ['./strategic-sessions.component.css']
})
export class StrategicSessionsComponent implements OnInit, AfterViewInit {

  sessions: StrategicSession[] = [];

  displayedColumns: string[] = ["id", "name", "created", "updated" ];
  dataSource: MatTableDataSource<StrategicSession> = new MatTableDataSource<StrategicSession>(this.sessions);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private sessionService: StrategicSessionsService) {}

  ngOnInit(): void {
    this.getSessions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getSessions(): void {
    this.sessionService.getSessions().subscribe(c => {
      this.sessions = c;
      this.dataSource.data = this.sessions;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createSession(): void {
    console.log("Creating session");
    var name = 'Demo session ' + new Date().toISOString();
    var request = {name:name};
    this.sessionService.createSession(request)
      .subscribe(session => {
        this.sessions.push(session);
      });
  }

  deleteSession(session: StrategicSession): void {
    this.sessions = this.sessions.filter(h => h !== session);
    this.sessionService.deleteSession(session.id).subscribe();
  }

}
