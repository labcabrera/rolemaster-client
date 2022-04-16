import { Component, Input, OnInit } from '@angular/core';
import { TacticalAction } from 'src/app/model/actions';

@Component({
  selector: 'app-critical-result-view',
  templateUrl: './critical-result-view.component.html',
  styleUrls: ['./critical-result-view.component.scss']
})
export class CriticalResultViewComponent implements OnInit {

  @Input() action: TacticalAction = {} as TacticalAction;
  
  constructor() { }

  ngOnInit(): void {
  }

}
