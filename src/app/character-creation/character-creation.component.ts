import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { CharacterCreationRequest, CharacterInfo } from '../model/character-info';
import { CharacterService } from '../services/character-service';
import { CharacterGenerationUtilsService } from '../services/character-generation-utils.service';
import { RandomUtilsService } from '../services/random-utils.service';
@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterCreationFormGroup: FormGroup;

  characterInfo?: CharacterInfo;
  
  characterBasicData: FormGroup;
  characterDevelopment: FormGroup;
  
  basicDataDisabled = false;

  constructor(
    private characterService: CharacterService,
    private randomUtilsService: RandomUtilsService,
    private characterGenerationUtilsService: CharacterGenerationUtilsService,
    private fb: FormBuilder) {

    this.characterCreationFormGroup = fb.group({
      'name': ['', Validators.required],
      'raceId': ['common-men', Validators.required],
      'professionId': ['thief', Validators.required],
      'realmId': ['essence', Validators.required],
      'age': ['25', Validators.required],
      'attributesRoll': [660],
      'attributesRemaining': [0],
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

}
