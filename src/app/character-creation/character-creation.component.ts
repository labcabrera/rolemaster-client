import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CharacterCreationRequest } from '../model/character-info';
import { CharacterService } from '../services/character-service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  characterCreationFormGroup: FormGroup;

  characterBasicData: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder) {

    this.characterCreationFormGroup = fb.group({
      'name': ['', Validators.required],
      'raceId': ['', Validators.required],
      'professionId': ['', Validators.required],
      'realmId': ['', Validators.required],
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

    this.characterBasicData = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  get characterCreationFormGroupValue() {
    return this.characterCreationFormGroup.value as CharacterCreationRequest;
  }

  createCharacter(): void {
    this.characterService.createCharacter(this.characterCreationFormGroupValue)
      .subscribe(character => {
        //this.sessions.push(session);
      });
  }

}
