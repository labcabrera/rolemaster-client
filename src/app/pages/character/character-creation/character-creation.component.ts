import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Race } from 'src/app/model/race';
import { Profession } from 'src/app/model/profession';
import { CharacterCreationRequest, CharacterInfo } from '../../../model/character-info';
import { CharacterService } from '../../../services/character-service';
import { ProfessionService } from 'src/app/services/profession.service';
import { RaceService } from 'src/app/services/race.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { NamedKey, Universe } from 'src/app/model/commons';
import { UniverseService } from 'src/app/services/universe.service';
import { EnumService } from 'src/app/services/enum.service';
import { CharacterCreationAttributesComponent } from 'src/app/components/character/character-creation-attributes/character-creation-attributes.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  user?: User;

  characterInfo: CharacterInfo;

  versions: NamedKey[] = [];
  universes: Universe[] = [];
  races: Race[] = [];
  realms: NamedKey[] = [];
  professions: Profession[] = [];

  characterCreationFormGroup: FormGroup;
  characterBasicData: FormGroup;
  characterDevelopment: FormGroup;
  trainingPackages: FormGroup;

  basicDataDisabled = false;

  @ViewChild(CharacterCreationAttributesComponent) attributesComponent?: CharacterCreationAttributesComponent;

  constructor(
    private characterService: CharacterService,
    private universeService: UniverseService,
    private raceService: RaceService,
    private professionService: ProfessionService,
    private enumService: EnumService,
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router,
    private fb: FormBuilder) {

    this.characterInfo = {} as CharacterInfo;

    this.characterCreationFormGroup = fb.group({
      'name': ['', Validators.required],
      'version': ['', Validators.required],
      'universeId': ['', Validators.required],
      'level': ['1', Validators.required],
      'raceId': ['', Validators.required],
      'professionId': ['', Validators.required],
      'realm': ['', Validators.required],
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
    this.characterCreationFormGroup.controls['universeId'].valueChanges.subscribe(universeId => this.loadRaces(universeId));
    this.characterCreationFormGroup.controls['professionId'].valueChanges.subscribe(professionId => this.loadRealms(professionId));
    this.characterDevelopment = fb.group({
      'secondCtrl': ['', Validators.required]
    })
    this.trainingPackages = fb.group({});
    this.characterBasicData = this.fb.group({
      firstCtrl: ['Development', Validators.required],
    });
  }

  ngOnInit() {
    this.loadRolemasterVersions();
    this.universeService.find().subscribe({
      next: results => {
        this.universes = results;
        this.readUser();
      },
      error: error => this.errorService.displayError(error)
    });
    this.professionService.getProfessions('').subscribe({
      next: results => this.professions = results,
      error: error => this.errorService.displayErrorWithPrefix("Error reading professions", error)
    });
  }

  private readUser(): void {
    this.userService.findUser().subscribe({
      next: result => {
        this.user = result;
        const version = this.user.defaultVersion ? this.user.defaultVersion : 'rmss';
        this.characterCreationFormGroup.patchValue({
          version: version,
          universeId: this.user.defaultUniverseId
        });
        this.onVersionChange(version);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private loadRolemasterVersions(): void {
    this.enumService.findRolemasterVersions().subscribe({
      next: result => this.versions = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private loadRaces(universeId: string): void {
    const version = this.characterCreationFormGroup.controls['version'].value;
    this.raceService.find(version, universeId).subscribe({
      next: results => this.races = results,
      error: error => this.errorService.displayErrorWithPrefix("Error reading races", error)
    });
  }

  private loadRealms(professionId: string): void {
    const profession: Profession = this.professions.filter(e => e.id == professionId)[0];
    this.realms = [];
    profession.availableRealms.forEach(e => {
      this.realms.push({ key: e, name: this.capitalize(e) });
    });
    if (this.realms.length == 1) {
      this.characterCreationFormGroup.patchValue({ realm: this.realms[0].key });
    }
  }

  get characterCreationFormGroupValue() {
    return this.characterCreationFormGroup.value as CharacterCreationRequest;
  }

  createCharacter(): void {
    this.characterService.createCharacter(this.characterCreationFormGroupValue).subscribe({
      next: character => {
        const url = `characters/detail/${character.id}`
        this.router.navigateByUrl(url);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterCreationFormGroupValue.weaponCategoryPriority, event.previousIndex, event.currentIndex);
  }

  private capitalize(word: string): string {
    if (!word) return word;
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  onVersionChange(version: any): void {
    if (version === 'rmss') {
      this.characterCreationFormGroup.patchValue({
        baseAttributes: {
          'ag': 66, 'co': 66, 'em': 66, 'in': 66, 'me': 66, 'pr': 66, 'qu': 66, 're': 66, 'sd': 66, 'st': 66
        }
      });
    } else if (version === 'rmu') {
      this.characterCreationFormGroup.patchValue({
        baseAttributes: {
          'ag': 59, 'co': 59, 'em': 59, 'in': 59, 'me': 59, 'pr': 59, 'qu': 59, 're': 59, 'sd': 59, 'st': 59
        }
      });
    }
    this.attributesComponent?.loadVersion(version);
  }

  onRaceChange(raceId: string) {
    this.attributesComponent?.loadRace(raceId);
  }

  onAttributeChanged(attribute: any) {
    const att = attribute.attribute;
    const value = attribute.currentValue;
    const patch = {
      baseAttributes: {
        [att]: value
      }
    };
    this.characterCreationFormGroup.patchValue(patch);
  }

}
