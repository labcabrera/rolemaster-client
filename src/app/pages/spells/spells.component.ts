import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Spell } from 'src/app/model/spell';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  spells?: Spell[];
  displayedColumns: string[] = [ "name", "spell-list", "level", "type", "subtype", "preparation", "targetType", "rangeType" ];
  dataSource: MatTableDataSource<Spell> = new MatTableDataSource<Spell>(this.spells);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor( private spellService: SpellService) { }

  ngOnInit(): void {
    this.getSpells();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }
  
  getSpells() {
    this.spellService.find().subscribe(s => {
      this.spells = s;
      this.dataSource.data = this.spells;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
