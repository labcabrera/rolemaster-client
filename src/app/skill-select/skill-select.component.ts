import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { SkillService } from '../services/skill.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-skill-select',
  templateUrl: './skill-select.component.html',
  styleUrls: ['./skill-select.component.scss']
})
export class SkillSelectComponent implements OnInit {

  skillControl = new FormControl();
  options: Skill[] = [];
  filteredOptions: Observable<Skill[]>;

  constructor(private skillService: SkillService) {
    skillService.getSkills().subscribe(skills => this.options = skills);

    this.filteredOptions = this.skillControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngOnInit() {
    this.filteredOptions = this.skillControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): Skill[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.id.toLowerCase().includes(filterValue));
  }

}
