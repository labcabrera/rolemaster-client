import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterListComponent } from './character-list/characters.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './session-list/session-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'sessions/detail/:id', component: SessionDetailComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
