import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Profession } from 'src/app/model/profession';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-profession-detail',
  templateUrl: './profession-detail.component.html',
  styleUrls: ['./profession-detail.component.scss']
})
export class ProfessionDetailComponent implements OnInit {

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  profession: Profession = {} as Profession;

  realms: string[] = ["essence", "channeling", "mentalism", "arcane"];

  constructor(
    private professionService: ProfessionService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const professionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadProfession(professionId);
  }

  loadProfession(professionId: string) {
    this.professionService.findById(professionId).subscribe(result => {
      this.profession = result;
    });
  }

  save() {
  }

  
}
