import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharactersComponent } from './characters/characters.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'sessions/detail/:id', component: SessionDetailComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
