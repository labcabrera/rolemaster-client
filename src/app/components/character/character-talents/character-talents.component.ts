import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CharacterCustomization, CharacterInfo } from 'src/app/model/character-info';
import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-character-talents',
  templateUrl: './character-talents.component.html',
  styleUrls: ['./character-talents.component.scss']
})
export class CharacterTalentsComponent implements OnInit {

  @Input() character?: CharacterInfo;

  talents: CharacterCustomization[] = [];
  talentControl: FormControl = new FormControl();
  filteredOptions: Observable<CharacterCustomization[]>;

  constructor(
    private characterCustomizationService: CharacterCustomizationService,
    private errorService: ErrorService,
  ) {
    this.filteredOptions = this.talentControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.talents.slice())),
    );
  }

  ngOnInit(): void {
    this.loadTalents();
  }

  addCustomization() {
    this.errorService.displayError({error: {message: "Not implemented"}});
  }

  displayFn(talent: CharacterCustomization): string {
    return talent && talent.name ? talent.name : '';
  }

  private loadTalents() {
    this.characterCustomizationService.findByType(this.character!.version, 'talent').subscribe({
      next: results => this.talents = results,
      error: error => this.errorService.displayError(error)
    });
  }


  private _filter(name: string): CharacterCustomization[] {
    const filterValue = name.toLowerCase();
    return this.talents.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
