import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TacticalSessionsComponent } from './pages/tactical/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical/tactical-session/tactical-session.component';

import { StrategicSessionsComponent } from './pages/strategic/strategic-sessions/strategic-sessions.component';
import { StrategicSessionComponent } from './pages/strategic/strategic-session/strategic-session.component';

import { SkillListComponent } from './pages/skill-list/skill-list.component';
import { ProfessionListComponent } from './pages/profession-list/profession-list.component';
import { RaceListComponent } from './pages/race-list/race-list.component';
import { RaceDetailComponent } from './pages/race-detail/race-detail.component';
import { ProfessionDetailComponent } from './pages/profession-detail/profession-detail.component';
import { SkillCategoryListComponent } from './pages/skill-category-list/skill-category-list.component';
import { SkillSelectComponent } from './components/character/skill-select/skill-select.component';

import { CharacterListComponent } from './pages/character/character-list/characters.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterCreationComponent } from './pages/character/character-creation/character-creation.component';
import { CharacterDevelopmentComponent } from './components/character/character-development/character-development.component';
import { CharacterSkillCategoryListComponent } from './components/character/character-skill-category-list/character-skill-category-list.component';
import { CharacterSkillListComponent } from './components/character/character-skill-list/character-skill-list.component';
import { CharacterAttributesComponent } from './components/character/character-attributes/character-attributes.component';
import { CharacterViewComponent } from './pages/character/character-view/character-view.component';

import { TacticalViewComponent } from './pages/tactical-view/tactical-view.component';
import { SharedModule } from './components/shared/shared.module';

import { NpcListComponent } from './pages/npc-list/npc-list.component';
import { NpcDetailComponent } from './pages/npc-detail/npc-detail.component';
import { StrategicSessionCreationComponent } from './pages/strategic/strategic-session-creation/strategic-session-creation.component';
import { TacticalSessionCreationComponent } from './pages/tactical/tactical-session-creation/tactical-session-creation.component';
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
import { DialogSelectActionComponent } from './components/dialogs/dialog-select-action/dialog-select-action.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { TrainingPackagesComponent } from './pages/training-packages/training-packages.component';
import { TrainingPackageComponent } from './pages/training-package/training-package.component';
import { TacticalViewCharacterActionComponent } from './components/tactical/tactical-view-character-action/tactical-view-character-action.component';
import { CharacterGeneralDataComponent } from './components/character-general-data/character-general-data.component';
import { TacticalViewCharacterComponent } from './components/tactical/tactical-view-character/tactical-view-character.component';
import { DialogTacticalCharacterEditionComponent } from './components/dialogs/dialog-tactical-character-edition/dialog-tactical-character-edition.component';
import { DialogSetInitiativeComponent } from './components/dialogs/dialog-set-initiative/dialog-set-initiative.component';
import { DialogActionExecutionComponent } from './components/dialogs/dialog-action-execution/dialog-action-execution.component';
import { TacticalSessionLogTableComponent } from './components/tactical/tactical-session-log-table/tactical-session-log-table.component';
import { DialogTacticalCharacterComponent } from './components/dialogs/dialog-tactical-character/dialog-tactical-character.component';
import { AttackResultComponent } from './components/tactical/attack-result/attack-result.component';
import { MeleeAttackExecutionComponent } from './components/tactical/action-execution/melee-attack-execution/melee-attack-execution.component';
import { CriticalResultViewComponent } from './components/tactical/action-execution/critical-result-view/critical-result-view.component';
import { DialogAddSkillComponent } from './components/dialogs/dialog-add-skill/dialog-add-skill.component';
import { CharacterItemViewComponent } from './components/character/character-item-view/character-item-view.component';
import { DialogAddCharacterItemComponent } from './components/dialogs/dialog-add-character-item/dialog-add-character-item.component';
import { CharacterBasicInfoComponent } from './components/character/character-basic-info/character-basic-info.component';
import { ActionDeclarationMeleeAttackComponent } from './components/tactical/action-declaration/action-declaration-melee-attack/action-declaration-melee-attack.component';
import { MovingManeuverComponent } from './components/tactical/action-declaration/moving-maneuver/moving-maneuver.component';
import { StaticManeuverComponent } from './components/tactical/action-declaration/static-maneuver/static-maneuver.component';
import { MissileAttackComponent } from './components/tactical/action-declaration/missile-attack/missile-attack.component';
import { SpellCastComponent } from './components/tactical/action-declaration/spell-cast/spell-cast.component';

@NgModule({
  declarations: [
    AppComponent,
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
    CharacterGeneralDataComponent,
    TacticalViewCharacterComponent,
    DialogTacticalCharacterEditionComponent,
    DialogSetInitiativeComponent,
    DialogActionExecutionComponent,
    TacticalSessionLogTableComponent,
    DialogTacticalCharacterComponent,
    AttackResultComponent,
    MeleeAttackExecutionComponent,
    CriticalResultViewComponent,
    DialogAddSkillComponent,
    CharacterItemViewComponent,
    DialogAddCharacterItemComponent,
    CharacterBasicInfoComponent,
    ActionDeclarationMeleeAttackComponent,
    MovingManeuverComponent,
    StaticManeuverComponent,
    MissileAttackComponent,
    SpellCastComponent,
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
