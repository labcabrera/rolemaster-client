import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterListComponent } from './character-list/characters.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { RaceListComponent } from './race-list/race-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SkillCategoryListComponent } from './skill-category-list/skill-category-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'sessions/detail/:id', component: SessionDetailComponent },
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'races', component: RaceListComponent },
  { path: 'professions', component: ProfessionListComponent },
  { path: 'skill-categories', component: SkillCategoryListComponent },
  { path: 'skills', component: SkillListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
