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

  characterCreationRequest: CharacterCreationRequest;
  characterCreationFormGroup: FormGroup;

  characterBasicData: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder) {
      
      this.characterCreationRequest = this.newCharacterTemplate();
      this.characterBasicData = this.fb.group({
        firstCtrl: ['', Validators.required],
      });
      this.secondFormGroup = this.fb.group({
        secondCtrl: ['', Validators.required],
      });
      this.characterCreationFormGroup = this.fb.group(this.characterCreationRequest);
    }
    
    ngOnInit() {
    }

    get characterCreationFormGroupValue() {
      return this.characterCreationFormGroup.value as CharacterCreationRequest;
    }
    
    newCharacterTemplate(): CharacterCreationRequest {
      return {
        name: '',
        attributesRoll: 660,
        professionId: '',
        raceId: '',
        realmId: '',
        baseAttributes: {
          ag: 50,
          co: 50,
          em: 50,
          in: 50,
          me: 50,
          pr: 50,
          qu: 50,
          re: 50,
          sd: 50,
          st: 50
        }
      }
    }
    
    createCharacter(): void {
    this.characterService.createCharacter(this.characterCreationRequest)
      .subscribe(character => {
        //this.sessions.push(session);
      });
    }
    
  }
