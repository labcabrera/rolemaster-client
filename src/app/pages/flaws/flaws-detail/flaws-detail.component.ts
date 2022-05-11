import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterCustomization } from 'src/app/model/character-info';
import { CharacterCustomizationService } from 'src/app/services/character-customization.service';
import { ErrorService } from 'src/app/services/error.service';


@Component({
  selector: 'app-flaws-detail',
  templateUrl: './flaws-detail.component.html',
  styleUrls: ['./flaws-detail.component.scss']
})
export class FlawsDetailComponent implements OnInit {

  flaw?: CharacterCustomization;
  
  constructor(
    private characterCustomizationService: CharacterCustomizationService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadFlaw();
  }

  private loadFlaw(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.characterCustomizationService.findById(id).subscribe({
      next: result => this.flaw = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
