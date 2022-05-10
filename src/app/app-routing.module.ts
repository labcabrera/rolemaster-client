import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './pages/character/character-creation/character-creation.component';
import { CharacterListComponent } from './pages/character/character-list/characters.component';
import { CharacterViewComponent } from './pages/character/character-view/character-view.component';
import { ProfessionListComponent } from './pages/profession/profession-list/profession-list.component';
import { RaceListComponent } from './pages/race/race-list/race-list.component';
import { StrategicSessionComponent } from './pages/strategic/strategic-session/strategic-session.component';
import { StrategicSessionsComponent } from './pages/strategic/strategic-sessions/strategic-sessions.component';
import { SkillCategoryListComponent } from './pages/skill-category/skill-category-list/skill-category-list.component';
import { SkillListComponent } from './pages/skill/skill-list/skill-list.component';
import { TacticalViewComponent } from './pages/tactical-view/tactical-view.component';
import { TacticalSessionsComponent } from './pages/tactical/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical/tactical-session/tactical-session.component';
import { NpcListComponent } from './pages/npc/npc-list/npc-list.component';
import { NpcDetailComponent } from './pages/npc/npc-detail/npc-detail.component';
import { StrategicSessionCreationComponent } from './pages/strategic/strategic-session-creation/strategic-session-creation.component';
import { TacticalSessionCreationComponent } from './pages/tactical/tactical-session-creation/tactical-session-creation.component';
import { SkillDetailComponent } from './pages/skill/skill-detail/skill-detail.component';
import { SkillCategoryDetailComponent } from './pages/skill-category/skill-category-detail/skill-category-detail.component';
import { SpellsComponent } from './pages/spells/spells.component';
import { SpellListDetailComponent } from './pages/spell-list-detail/spell-list-detail.component';
import { SpellDetailComponent } from './pages/spell-detail/spell-detail.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';
import { MovementComponent } from './pages/movement/movement.component';
import { ItemsComponent } from './pages/item/items/items.component';
import { StaticManeuversComponent } from './pages/static-maneuvers/static-maneuvers.component';
import { MovingManeuversComponent } from './pages/moving-maneuvers/moving-maneuvers.component';
import { RaceDetailComponent } from './pages/race/race-detail/race-detail.component';
import { ProfessionDetailComponent } from './pages/profession/profession-detail/profession-detail.component';
import { ItemDetailComponent } from './pages/item/item-detail/item-detail.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { HomeComponent } from './pages/home/home.component';
import { TrainingPackageComponent } from './pages/training-package/training-package-detail/training-package.component';
import { TrainingPackagesComponent } from './pages/training-package/training-packages/training-packages.component';
import { CombatComponent } from './pages/wiki/combat/combat.component';
import { WikiGlossaryComponent } from './pages/wiki/wiki-glossary/wiki-glossary.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/detail/:id', component: CharacterViewComponent },
  { path: 'strategic-sessions', component: StrategicSessionsComponent },
  { path: 'strategic-sessions/detail/:id', component: StrategicSessionComponent },
  { path: 'strategic-sessions/creation', component: StrategicSessionCreationComponent },
  { path: 'tactical-sessions', component: TacticalSessionsComponent },
  { path: 'tactical-sessions/detail/:id', component: TacticalSessionComponent },
  { path: 'tactical-sessions/creation', component: TacticalSessionCreationComponent},
  { path: 'characters/creation', component: CharacterCreationComponent },
  { path: 'movement', component: MovementComponent},
  { path: 'static-maneuvers', component: StaticManeuversComponent },
  { path: 'moving-maneuvers', component: MovingManeuversComponent },
  { path: 'races', component: RaceListComponent },
  { path: 'races/detail/:id', component: RaceDetailComponent },
  { path: 'npc', component: NpcListComponent },
  { path: 'npc/detail/:id', component: NpcDetailComponent },
  { path: 'professions', component: ProfessionListComponent },
  { path: 'professions/detail/:id', component: ProfessionDetailComponent },
  { path: 'skill-categories', component: SkillCategoryListComponent },
  { path: 'skill-categories/detail/:id', component: SkillCategoryDetailComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'skills/detail/:id', component: SkillDetailComponent },
  { path: 'training-packages', component: TrainingPackagesComponent },
  { path: 'training-packages/detail/:id', component: TrainingPackageComponent },
  { path: 'spell-lists', component: SpellListComponent },
  { path: 'spell-lists/detail/:id', component: SpellListDetailComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'spells/detail/:id', component: SpellDetailComponent },
  { path: 'tactical', component: TacticalViewComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/detail/:id', component: ItemDetailComponent },
  { path: 'wiki/combat', component: CombatComponent },
  { path: 'wiki/glossary', component: WikiGlossaryComponent },
  { path: 'settings', component: UserSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
