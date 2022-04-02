import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SpellList } from 'src/app/model/spell';
import { SpellListService } from 'src/app/services/spell-list.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spellLists: SpellList[] = [];

  displayedColumns: string[] = ["id", "name", "realm", "type" ];
  dataSource: MatTableDataSource<SpellList> = new MatTableDataSource<SpellList>(this.spellLists);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private skillListService: SpellListService) { }

  ngOnInit(): void {
    this.getSpellLists();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getSpellLists(): void {
    this.skillListService.find().subscribe(result => {
      this.spellLists = result;
      this.dataSource.data = this.spellLists;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
