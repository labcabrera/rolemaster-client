import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Profession } from 'src/app/model/profession';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-profession-detail',
  templateUrl: './profession-detail.component.html',
  styleUrls: ['./profession-detail.component.scss']
})
export class ProfessionDetailComponent implements OnInit {

  profession?: Profession;
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
