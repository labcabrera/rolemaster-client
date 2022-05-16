import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TacticalSession } from 'src/app/model/session';

@Component({
  selector: 'app-tactical-session-table',
  templateUrl: './tactical-session-table.component.html',
  styleUrls: ['./tactical-session-table.component.scss']
})
export class TacticalSessionTableComponent implements OnInit {

  @Input() dataSource?: MatTableDataSource<TacticalSession>;

  displayedColumns = ["name", "state"];

  constructor() { }

  ngOnInit(): void {
  }

}
