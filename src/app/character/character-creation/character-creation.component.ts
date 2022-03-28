import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { CharacterCreationRequest, CharacterInfo } from '../../model/character-info';
import { CharacterService } from '../../services/character-service';
import { CharacterGenerationUtilsService } from '../../services/character-generation-utils.service';
import { RandomUtilsService } from '../../services/random-utils.service';
@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterCreationFormGroup: FormGroup;

  characterInfo: CharacterInfo;

  characterBasicData: FormGroup;
  characterDevelopment: FormGroup;
  trainingPackages: FormGroup;

  basicDataDisabled = false;

  constructor(
    private characterService: CharacterService,
    private randomUtilsService: RandomUtilsService,
    private characterGenerationUtilsService: CharacterGenerationUtilsService,
    private fb: FormBuilder) {

    this.characterInfo = {} as CharacterInfo;

    this.characterCreationFormGroup = fb.group({
      'name': ['', Validators.required],
      'raceId': ['common-men', Validators.required],
      'professionId': ['thief', Validators.required],
      'realmId': ['essence', Validators.required],
      'age': ['25', Validators.required],
      'height': ['174', Validators.required],
      'weight': ['72', Validators.required],
      'attributesRoll': [660],
      'attributesRemaining': [0],
      'weaponCategoryPriority': [ [
        "weapon-1h-edged",
        "weapon-missile",
        "weapon-thrown",
        "weapon-pole-arms",
        "weapon-2h",
        "weapon-1h-concussion",
        "weapon-missile-artillery"
      ] ],
      'baseAttributes': fb.group({
        'ag': [100],
        'co': [44],
        'em': [79],
        'in': [81],
        'me': [20],
        'pr': [15],
        'qu': [72],
        're': [30],
        'sd': [78],
        'st': [51]
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
  }

  get characterCreationFormGroupValue() {
    return this.characterCreationFormGroup.value as CharacterCreationRequest;
  }

  updateAttributeCost(): void {
    console.log("Updating attributes cost");
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
      console.log("created character");
      this.basicDataDisabled = true;
      this.characterInfo = character;
    });
  }

  createCharacterNext(): void {
    this.createCharacter();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterCreationFormGroupValue.weaponCategoryPriority, event.previousIndex, event.currentIndex);
  }

}
