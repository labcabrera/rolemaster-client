import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellList } from 'src/app/model/spell';
import { SpellListService } from 'src/app/services/spell-list.service';

@Component({
  selector: 'app-spell-list-detail',
  templateUrl: './spell-list-detail.component.html',
  styleUrls: ['./spell-list-detail.component.scss']
})
export class SpellListDetailComponent implements OnInit {

  spellList: SpellList = {} as SpellList;

  constructor(
    private spellListService: SpellListService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadSpellList();
  }

  loadSpellList() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.spellListService.findById(id).subscribe(result => {
      this.spellList = result;
    });
  }

}
