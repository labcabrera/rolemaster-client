import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { SpellList, Spell } from 'src/app/model/spell';
import { SpellListService } from 'src/app/services/spell-list.service';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spell-list-detail',
  templateUrl: './spell-list-detail.component.html',
  styleUrls: ['./spell-list-detail.component.scss']
})
export class SpellListDetailComponent implements OnInit {

  spellList: SpellList = {} as SpellList;
  spells: Spell[] = [];
  dataSource: MatTableDataSource<Spell> = new MatTableDataSource<Spell>(this.spells);
  displayedColumns: string[] = [ "name", "level", "type", "subtype", "preparation", "targetType", "rangeType" ];

  constructor(
    private spellListService: SpellListService,
    private spellService: SpellService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadSpellList();
  }

  loadSpellList() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.spellListService.findById(id).subscribe(result => {
      this.spellList = result;
    });
    this.spellService.findBySpellListId(id).subscribe(result => {
      this.spells = result;
      this.dataSource.data = this.spells;
    });
  }

}
