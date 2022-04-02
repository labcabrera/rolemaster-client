import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './pages/character-creation/character-creation.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/characters.component';
import { CharacterViewComponent } from './pages/character-view/character-view.component';
import { ProfessionListComponent } from './pages/profession-list/profession-list.component';
import { RaceListComponent } from './pages/race-list/race-list.component';
import { StrategicSessionComponent } from './pages/strategic-session/strategic-session.component';
import { StrategicSessionsComponent } from './pages/strategic-sessions/strategic-sessions.component';
import { SkillCategoryListComponent } from './pages/skill-category-list/skill-category-list.component';
import { SkillListComponent } from './pages/skill-list/skill-list.component';
import { TacticalViewComponent } from './pages/tactical-view/tactical-view.component';
import { TacticalSessionsComponent } from './pages/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical-session/tactical-session.component';
import { NpcListComponent } from './pages/npc-list/npc-list.component';
import { NpcDetailComponent } from './pages/npc-detail/npc-detail.component';
import { StrategicSessionCreationComponent } from './pages/strategic-session-creation/strategic-session-creation.component';
import { TacticalSessionCreationComponent } from './pages/tactical-session-creation/tactical-session-creation.component';
import { SkillDetailComponent } from './pages/skill-detail/skill-detail.component';
import { SkillCategoryDetailComponent } from './pages/skill-category-detail/skill-category-detail.component';
import { SpellsComponent } from './pages/spells/spells.component';
import { SpellListDetailComponent } from './pages/spell-list-detail/spell-list-detail.component';
import { SpellDetailComponent } from './pages/spell-detail/spell-detail.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/detail/:id', component: CharacterViewComponent },
  { path: 'strategic-sessions', component: StrategicSessionsComponent },
  { path: 'strategic-sessions/detail/:id', component: StrategicSessionComponent },
  { path: 'strategic-sessions/creation', component: StrategicSessionCreationComponent },
  { path: 'tactical-sessions', component: TacticalSessionsComponent },
  { path: 'tactical-sessions/detail/:id', component: TacticalSessionComponent },
  { path: 'tactical-sessions/creation', component: TacticalSessionCreationComponent},
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'races', component: RaceListComponent },
  { path: 'npc', component: NpcListComponent },
  { path: 'npc/detail/:id', component: NpcDetailComponent },
  { path: 'professions', component: ProfessionListComponent },
  { path: 'skill-categories', component: SkillCategoryListComponent },
  { path: 'skill-categories/detail/:id', component: SkillCategoryDetailComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'skills/detail/:id', component: SkillDetailComponent },
  { path: 'spell-lists', component: SpellListComponent },
  { path: 'spell-lists/detail/:id', component: SpellListDetailComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'spells/detail/:id', component: SpellDetailComponent },
  { path: 'tactical', component: TacticalViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
