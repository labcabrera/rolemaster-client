import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-select-action',
  templateUrl: './dialog-select-action.component.html',
  styleUrls: ['./dialog-select-action.component.scss']
})
export class DialogSelectActionComponent implements OnInit {

  minActionPercent = 1;
  maxActionPercent = 100;

  constructor() { }

  ngOnInit(): void {
  }

  setUp(minActionPercent: number, maxActionPercent: number) {
    this.minActionPercent = minActionPercent;
    this.maxActionPercent = maxActionPercent;
  }

}
