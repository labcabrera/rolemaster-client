import { Component, OnInit } from '@angular/core';
import { Profession } from '../../model/profession';
import { ProfessionService } from '../../services/profession.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.scss']
})
export class ProfessionListComponent implements OnInit {

  professions?: Profession[];

  constructor(private professionService: ProfessionService) { }

  ngOnInit(): void {
    this.getProfessions();
  }

  getProfessions(): void {
    this.professionService.getProfessions().subscribe(result => this.professions = result);
  }
}
