import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Npc } from 'src/app/model/npc';
import { NpcService } from 'src/app/services/npc.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit, AfterViewInit {

  npcs?: Npc[];
  
  dataSource: MatTableDataSource<Npc> = new MatTableDataSource<Npc>(this.npcs);
  displayedColumns: string[] = [ "name", "level", "unique"];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;


  constructor(private npcService: NpcService) { }

  ngOnInit(): void {
    this.loadNpcs();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }
  
  loadNpcs() {
    this.npcService.find().subscribe(r => {
      this.npcs = r;
      this.dataSource.data = this.npcs;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
