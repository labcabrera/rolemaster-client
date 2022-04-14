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
import { MovementComponent } from './pages/movement/movement.component';
import { StaticManeuversComponent } from './pages/static-maneuvers/static-maneuvers.component';
import { MovingManeuversComponent } from './pages/moving-maneuvers/moving-maneuvers.component';
import { ItemsComponent } from './pages/items/items.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { DialogSelectActionComponent } from './components/dialog-select-action/dialog-select-action.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { TrainingPackagesComponent } from './pages/training-packages/training-packages.component';
import { TrainingPackageComponent } from './pages/training-package/training-package.component';
import { TacticalViewCharacterActionComponent } from './components/tactical-view-character-action/tactical-view-character-action.component';
import { CharacterSkillUpgradeComponent } from './pages/character-skill-upgrade/character-skill-upgrade.component';
import { CharacterGeneralDataComponent } from './components/character-general-data/character-general-data.component';
import { TacticalViewCharacterComponent } from './components/tactical-view-character/tactical-view-character.component';
import { TacticalViewCharacterManualEditionComponent } from './components/tactical-view-character-manual-edition/tactical-view-character-manual-edition.component';

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
    SpellListComponent,
    MovementComponent,
    StaticManeuversComponent,
    MovingManeuversComponent,
    ItemsComponent,
    NavBarComponent,
    ItemDetailComponent,
    DialogSelectActionComponent,
    MessagesComponent,
    UserSettingsComponent,
    TrainingPackagesComponent,
    TrainingPackageComponent,
    TacticalViewCharacterActionComponent,
    CharacterSkillUpgradeComponent,
    CharacterGeneralDataComponent,
    TacticalViewCharacterComponent,
    TacticalViewCharacterManualEditionComponent
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
