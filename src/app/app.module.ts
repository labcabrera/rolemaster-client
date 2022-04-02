import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TacticalSessionsComponent } from './pages/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical-session/tactical-session.component';

import { StrategicSessionsComponent } from './pages/strategic-sessions/strategic-sessions.component';
import { StrategicSessionComponent } from './pages/strategic-session/strategic-session.component';

import { RealmsComponent } from './realms/realms.component';
import { SkillListComponent } from './pages/skill-list/skill-list.component';
import { ProfessionListComponent } from './pages/profession-list/profession-list.component';
import { RaceListComponent } from './pages/race-list/race-list.component';
import { RaceDetailComponent } from './pages/race-detail/race-detail.component';
import { ProfessionDetailComponent } from './pages/profession-detail/profession-detail.component';
import { SkillCategoryListComponent } from './pages/skill-category-list/skill-category-list.component';
import { SkillSelectComponent } from './skill-select/skill-select.component';

import { CharacterListComponent } from './pages/character-list/characters.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterCreationComponent } from './pages/character-creation/character-creation.component';
import { CharacterDevelopmentComponent } from './character/character-development/character-development.component';
import { CharacterSkillCategoryListComponent } from './character/character-skill-category-list/character-skill-category-list.component';
import { CharacterSkillListComponent } from './character/character-skill-list/character-skill-list.component';
import { CharacterAttributesComponent } from './character/character-attributes/character-attributes.component';
import { CharacterBasicInfoComponent } from './character/character-basic-info/character-basic-info.component';
import { CharacterViewComponent } from './pages/character-view/character-view.component';

import { TacticalViewComponent } from './pages/tactical-view/tactical-view.component';
import { SharedModule } from './components/shared/shared.module';

import { NpcListComponent } from './pages/npc-list/npc-list.component';
import { NpcDetailComponent } from './pages/npc-detail/npc-detail.component';
import { StrategicSessionCreationComponent } from './pages/strategic-session-creation/strategic-session-creation.component';
import { TacticalSessionCreationComponent } from './pages/tactical-session-creation/tactical-session-creation.component';
import { SkillDetailComponent } from './pages/skill-detail/skill-detail.component';
import { SkillCategoryDetailComponent } from './pages/skill-category-detail/skill-category-detail.component';
import { SpellsComponent } from './pages/spells/spells.component';
import { SpellDetailComponent } from './pages/spell-detail/spell-detail.component';
import { SpellListDetailComponent } from './pages/spell-list-detail/spell-list-detail.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RealmsComponent,
    TacticalSessionsComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    StrategicSessionsComponent,
    StrategicSessionComponent,
    CharacterCreationComponent,
    CharacterDevelopmentComponent,
    CharacterSkillCategoryListComponent,
    CharacterSkillListComponent,
    CharacterAttributesComponent,
    SkillCategoryListComponent,
    SkillListComponent,
    ProfessionListComponent,
    RaceListComponent,
    RaceDetailComponent,
    ProfessionDetailComponent,
    CharacterBasicInfoComponent,
    CharacterViewComponent,
    SkillSelectComponent,
    TacticalViewComponent,
    TacticalSessionComponent,
    NpcListComponent,
    NpcDetailComponent,
    StrategicSessionCreationComponent,
    TacticalSessionCreationComponent,
    SkillDetailComponent,
    SkillCategoryDetailComponent,
    SpellsComponent,
    SpellDetailComponent,
    SpellListDetailComponent,
    SpellListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
