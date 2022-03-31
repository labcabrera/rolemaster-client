import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacticalSessionsComponent } from './tactical-sessions/tactical-sessions.component';



@NgModule({
  declarations: [
    TacticalSessionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TacticalSessionsComponent
  ]
})
export class PagesModule { }
