import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Profession } from 'src/app/model/profession';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-profession-detail',
  templateUrl: './profession-detail.component.html',
  styleUrls: ['./profession-detail.component.scss']
})
export class ProfessionDetailComponent implements OnInit {

  profession: Profession = {} as Profession;

  constructor(
    private professionService: ProfessionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const professionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadProfession(professionId);
  }

  loadProfession(raceId: string) {
    this.professionService.findById(raceId).subscribe(result => {
      this.profession = result;
    });
  }

}
