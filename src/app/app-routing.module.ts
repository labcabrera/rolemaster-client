import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './character/character-creation/character-creation.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterListComponent } from './character/character-list/characters.component';
import { CharacterViewComponent } from './character/character-view/character-view.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { RaceListComponent } from './race-list/race-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './pages/strategic-session-list/strategic-session-list.component';
import { SkillCategoryListComponent } from './skill-category-list/skill-category-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { TacticalViewComponent } from './tactical-view/tactical-view.component';
import { TacticalSessionsComponent } from './pages/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical-session/tactical-session.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/detail/:id', component: CharacterViewComponent },
  { path: 'strategic-sessions', component: SessionListComponent },
  { path: 'tactical-sessions', component: TacticalSessionsComponent },
  { path: 'tactical-sessions/detail/:id', component: TacticalSessionComponent },
  { path: 'sessions/detail/:id', component: SessionDetailComponent },
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'races', component: RaceListComponent },
  { path: 'professions', component: ProfessionListComponent },
  { path: 'skill-categories', component: SkillCategoryListComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'tactical', component: TacticalViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
