import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Skill } from 'src/app/model/skill';
import { CharacterInfo } from 'src/app/model/character-info';
import { SkillService } from 'src/app/services/skill.service';
import { CharacterService } from 'src/app/services/character-service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-dialog-add-skill',
  templateUrl: './dialog-add-skill.component.html',
  styleUrls: ['./dialog-add-skill.component.scss']
})
export class DialogAddSkillComponent implements OnInit {

  addSkillForm: FormGroup;

  character: CharacterInfo = {} as CharacterInfo;

  availableSkills: Skill[] = [];
  filteredOptions?: Observable<Skill[]>;

  constructor(
    private characterService: CharacterService,
    private skillService: SkillService,
    private errorService: ErrorService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>) {

    this.addSkillForm = this.fb.group({
      skillId: ['', Validators.required],
      customization01: [''],
      customization02: [''],
    });
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%', '50%');
    this.skillService.getSkills().subscribe(result => this.availableSkills = result);
    this.filteredOptions = this.addSkillForm.controls['skillId'].valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.availableSkills.slice()))
    );
  }

  load(character: CharacterInfo) {
    this.character = character;
  }

  addSkill() {
    const skillId = this.addSkillForm.value["skillId"].id;
    const customizations: string[] = [];
    if (this.addSkillForm.value['skillId'].customizableOptions > 0) {
      customizations.push(this.addSkillForm.value['customization01']);
    }
    if (this.addSkillForm.value['skillId'].customizableOptions > 1) {
      customizations.push(this.addSkillForm.value['customization02']);
    }
    this.characterService.addSkill(this.character.id, skillId, customizations).subscribe({
      next: result =>  {
        this.character = result;
        this.dialogRef.close();
      },
      error: error => this.errorService.displayError(error)
    })
  }

  displayFn(user: Skill): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Skill[] {
    const filterValue = name.toLowerCase();
    return this.availableSkills.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
