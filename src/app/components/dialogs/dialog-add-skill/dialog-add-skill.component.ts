import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Skill } from 'src/app/model/skill';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { CharacterInfo } from 'src/app/model/character-info';
import { SkillService } from 'src/app/services/skill.service';
import { CharacterService } from 'src/app/services/character-service';

@Component({
  selector: 'app-dialog-add-skill',
  templateUrl: './dialog-add-skill.component.html',
  styleUrls: ['./dialog-add-skill.component.scss']
})
export class DialogAddSkillComponent implements OnInit {

  character: CharacterInfo = {} as CharacterInfo;

  availableSkills: Skill[] = [];
  myControl = new FormControl();
  filteredOptions?: Observable<Skill[]>;

  constructor(
    private characterService: CharacterService,
    private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(result => this.availableSkills = result);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.availableSkills.slice())),
    );
  }

  load(character: CharacterInfo) {
    this.character = character;
  }

  displayFn(user: Skill): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Skill[] {
    const filterValue = name.toLowerCase();
    return this.availableSkills.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  addSkill() {
    const skillId = this.myControl.value.id;
    console.log("Skill id: ", skillId);

    this.characterService.addSkill(this.character.id, skillId, []).subscribe(result => {
      this.character = result;
      //TODO notify results to parent
    })
  }
}
