import { Component, OnInit, Input } from '@angular/core';
import { NamedKey } from 'src/app/model/commons';
import { Race } from 'src/app/model/race';

@Component({
  selector: 'app-race-adolescence-skill-categories',
  templateUrl: './race-adolescence-skill-categories.component.html',
  styleUrls: ['./race-adolescence-skill-categories.component.scss']
})
export class RaceAdolescenceSkillCategoriesComponent implements OnInit {

  @Input() race?: Race;

  categories: NamedKey[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.race && this.race.adolescenceSkillCategoryRanks) {
      const tmp = this.race.adolescenceSkillCategoryRanks;
      Object.keys(tmp).map(key => {
        const value = "todo";
        this.categories.push({ key: key, name: value });
      });
    }
  }

}
