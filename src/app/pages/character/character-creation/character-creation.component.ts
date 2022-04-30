import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Race } from 'src/app/model/race';
import { Profession } from 'src/app/model/profession';
import { CharacterCreationRequest, CharacterInfo } from '../../../model/character-info';
import { CharacterService } from '../../../services/character-service';
import { CharacterGenerationUtilsService } from '../../../services/character-generation-utils.service';
import { RandomUtilsService } from '../../../services/random-utils.service';
import { ProfessionService } from 'src/app/services/profession.service';
import { RaceService } from 'src/app/services/race.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterInfo: CharacterInfo;
  races: Race[] = [];
  professions: Profession[] = [];

  characterCreationFormGroup: FormGroup;
  characterBasicData: FormGroup;
  characterDevelopment: FormGroup;
  trainingPackages: FormGroup;

  basicDataDisabled = false;

  constructor(
    private characterService: CharacterService,
    private raceService: RaceService,
    private professionService: ProfessionService,
    private randomUtilsService: RandomUtilsService,
    private characterGenerationUtilsService: CharacterGenerationUtilsService,
    private errorService: ErrorService,
    private router: Router,
    private fb: FormBuilder) {

    this.characterInfo = {} as CharacterInfo;

    this.characterCreationFormGroup = fb.group({
      'name': ['', Validators.required],
      'level': ['1', Validators.required],
      'raceId': ['common-men', Validators.required],
      'professionId': ['thief', Validators.required],
      'realmId': ['essence', Validators.required],
      'age': ['25', Validators.required],
      'height': ['174', Validators.required],
      'weight': ['72', Validators.required],
      'attributesRoll': [660],
      'attributesRemaining': [0],
      'weaponCategoryPriority': [[
        "weapon-1h-edged",
        "weapon-missile",
        "weapon-thrown",
        "weapon-pole-arms",
        "weapon-2h",
        "weapon-1h-concussion",
        "weapon-missile-artillery"
      ]],
      'baseAttributes': fb.group({
        'ag': [66],
        'co': [66],
        'em': [66],
        'in': [66],
        'me': [66],
        'pr': [66],
        'qu': [66],
        're': [66],
        'sd': [66],
        'st': [66]
      })
    });
    this.characterDevelopment = fb.group({
      'secondCtrl': ['', Validators.required]
    })

    this.trainingPackages = fb.group({});

    this.characterBasicData = this.fb.group({
      firstCtrl: ['Development', Validators.required],
    });
  }

  ngOnInit() {
    this.raceService.find().subscribe({
      next: results => this.races = results,
      error: error => this.errorService.displayErrorWithPrefix("Error reading races", error)
    });
    this.professionService.getProfessions().subscribe({
      next: results => this.professions = results,
      error: error => this.errorService.displayErrorWithPrefix("Error reading professions", error)
    });
  }

  get characterCreationFormGroupValue() {
    return this.characterCreationFormGroup.value as CharacterCreationRequest;
  }

  updateAttributeCost(): void {
    var attributes = this.characterCreationFormGroupValue.baseAttributes;
    this.characterGenerationUtilsService.calculateAttributeCost(attributes).subscribe(cost => {
      var remaining = this.characterCreationFormGroupValue.attributesRoll - cost;
      this.characterCreationFormGroup.get("attributesRemaining")?.setValue(remaining);
    });
  }

  createRandomAttributesRoll(): void {
    this.randomUtilsService.randomRollSum(10, 10).subscribe(roll => {
      this.characterCreationFormGroup.get("attributesRoll")?.setValue(600 + roll);
      this.updateAttributeCost();
    })
  }

  createCharacter(): void {
    this.characterService.createCharacter(this.characterCreationFormGroupValue).subscribe(character => {
      const url = `characters/detail/${character.id}`
      this.router.navigateByUrl(url);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterCreationFormGroupValue.weaponCategoryPriority, event.previousIndex, event.currentIndex);
  }

  updateAttribute(event: any) {
    this.characterCreationFormGroup.patchValue({
      baseAttributes: { [event.attribute]: event.value }
    })
    this.updateAttributeCost();
  }

}
