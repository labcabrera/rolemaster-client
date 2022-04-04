import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Spell, SpellList } from 'src/app/model/spell';
import { SpellListService } from 'src/app/services/spell-list.service';
import { SpellService } from 'src/app/services/spell.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {

  spell: Spell = {} as Spell;
  spellList: SpellList = {} as SpellList;

  constructor(
    private spellService: SpellService,
    private spellListService: SpellListService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.loadSpell(id);
  }

  loadSpell(id: string) {
    this.spellService.findById(id).subscribe(result => {
      this.spell = result;
      this.loadSpellList(this.spell.spellListId);
    });
  }

  loadSpellList(spellListId: string) {
    this.spellListService.findById(spellListId).subscribe(result => {
      this.spellList = result;
    });
  }

}
