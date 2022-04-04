import { Component, OnInit } from '@angular/core';
import { NamedKey } from 'src/app/model/commons';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-dialog-select-action',
  templateUrl: './dialog-select-action.component.html',
  styleUrls: ['./dialog-select-action.component.scss']
})
export class DialogSelectActionComponent implements OnInit {

  minActionPercent = 1;
  maxActionPercent = 100;

  movementPaces: NamedKey[] = [];
  meleeAttackTypes: NamedKey[] = [];

  constructor(
    private enumService: EnumService
  ) { }

  ngOnInit(): void {
    this.enumService.findMovementPaces().subscribe(result => this.movementPaces = result);
    this.enumService.findMeleeAttackTypes().subscribe(result => this.meleeAttackTypes = result);
  }

  setUp(minActionPercent: number, maxActionPercent: number) {
    this.minActionPercent = minActionPercent;
    this.maxActionPercent = maxActionPercent;
  }

}
