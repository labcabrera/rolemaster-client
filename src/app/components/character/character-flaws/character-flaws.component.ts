import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs';

import { CharacterCustomization } from 'src/app/model/character-info';
import { CharacterInfo } from 'src/app/model/character-info';
import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-character-flaws',
  templateUrl: './character-flaws.component.html',
  styleUrls: ['./character-flaws.component.scss']
})
export class CharacterFlawsComponent implements OnInit {

  @Input() character?: CharacterInfo;

  flaws: CharacterCustomization[] = [];
  flawControl: FormControl = new FormControl();
  filteredOptions: Observable<CharacterCustomization[]>;

  constructor(
    private characterCustomizationService: CharacterCustomizationService,
    private errorService: ErrorService,
  ) {
    this.filteredOptions = this.flawControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.flaws.slice())),
    );
  }

  ngOnInit(): void {
    this.loadTalents();
  }

  addCustomization() {
    this.errorService.displayError({ error: { message: "Not implemented" } });
  }

  displayFn(talent: CharacterCustomization): string {
    return talent && talent.name ? talent.name : '';
  }

  private loadTalents() {
    this.characterCustomizationService.findByType('flaw').subscribe({
      next: results => this.flaws = results,
      error: error => this.errorService.displayError(error)
    });
  }

  private _filter(name: string): CharacterCustomization[] {
    const filterValue = name.toLowerCase();
    return this.flaws.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
