import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Spell } from 'src/app/model/spell';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {

  spell: Spell = {} as Spell;

  constructor(
    private spellService: SpellService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSpell();
  }

  getSpell() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.spellService.findById(id).subscribe(result => {
      this.spell = result;
    });
  }

}
