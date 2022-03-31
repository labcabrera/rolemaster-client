import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacticalSessionsComponent } from './tactical-sessions/tactical-sessions.component';
import { MatList, MatSelectionList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { AppModule } from '../app.module';
import { StrategicSessionsService } from '../services/sessions.service';

@NgModule({
  declarations: [
    TacticalSessionsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TacticalSessionsComponent
  ]
})
export class PagesModule { }
