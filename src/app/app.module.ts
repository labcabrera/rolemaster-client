import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TacticalSessionsComponent } from './pages/tactical/tactical-sessions/tactical-sessions.component';
import { TacticalSessionComponent } from './pages/tactical/tactical-session/tactical-session.component';

import { StrategicSessionsComponent } from './pages/strategic/strategic-sessions/strategic-sessions.component';
import { StrategicSessionComponent } from './pages/strategic/strategic-session/strategic-session.component';

import { SkillListComponent } from './pages/skill/skill-list/skill-list.component';
import { ProfessionListComponent } from './pages/profession/profession-list/profession-list.component';
import { RaceDetailComponent } from './pages/race/race-detail/race-detail.component';
import { ProfessionDetailComponent } from './pages/profession/profession-detail/profession-detail.component';
import { SkillCategoryListComponent } from './pages/skill-category/skill-category-list/skill-category-list.component';
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

import { NpcListComponent } from './pages/npc/npc-list/npc-list.component';
import { NpcDetailComponent } from './pages/npc/npc-detail/npc-detail.component';
import { StrategicSessionCreationComponent } from './pages/strategic/strategic-session-creation/strategic-session-creation.component';
import { TacticalSessionCreationComponent } from './pages/tactical/tactical-session-creation/tactical-session-creation.component';
import { SkillDetailComponent } from './pages/skill/skill-detail/skill-detail.component';
import { SkillCategoryDetailComponent } from './pages/skill-category/skill-category-detail/skill-category-detail.component';
import { SpellsComponent } from './pages/spells/spells.component';
import { SpellDetailComponent } from './pages/spell-detail/spell-detail.component';
import { SpellListDetailComponent } from './pages/spell-list-detail/spell-list-detail.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';
import { MovementComponent } from './pages/movement/movement.component';
import { StaticManeuversComponent } from './pages/static-maneuvers/static-maneuvers.component';
import { MovingManeuversComponent } from './pages/moving-maneuvers/moving-maneuvers.component';
import { ItemsComponent } from './pages/item/items/items.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemDetailComponent } from './pages/item/item-detail/item-detail.component';
import { DialogSelectActionComponent } from './components/dialogs/dialog-select-action/dialog-select-action.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { TrainingPackageComponent } from './pages/training-package/training-package-detail/training-package.component';
import { TrainingPackagesComponent } from './pages/training-package/training-packages/training-packages.component';
import { TacticalViewCharacterActionComponent } from './components/tactical/tactical-view-character-action/tactical-view-character-action.component';
import { CharacterGeneralDataComponent } from './components/character/character-general-data/character-general-data.component';
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
import { HomeComponent } from './pages/home/home.component';
import { DialogItemCustomizationComponent } from './components/dialogs/dialog-item-customization/dialog-item-customization.component';
import { ActionDeclarationMissileAttackComponent } from './components/tactical/action-declaration/action-declaration-missile-attack/action-declaration-missile-attack.component';
import { ActionDeclarationMovementComponent } from './components/tactical/action-declaration/action-declaration-movement/action-declaration-movement.component';
import { ActionDeclarationStaticManeuverComponent } from './components/tactical/action-declaration/action-declaration-static-maneuver/action-declaration-static-maneuver.component';
import { ActionDeclarationMovingManeuverComponent } from './components/tactical/action-declaration/action-declaration-moving-maneuver/action-declaration-moving-maneuver.component';
import { ActionDeclarationSpellCastComponent } from './components/tactical/action-declaration/action-declaration-spell-cast/action-declaration-spell-cast.component';
import { ActionDeclarationChangeItemsComponent } from './components/tactical/action-declaration/action-declaration-change-items/action-declaration-change-items.component';
import { CharacterTrainingPackagesComponent } from './components/character/character-training-packages/character-training-packages.component';
import { TacticalSessionCharacterManagementComponent } from './components/tactical-session/tactical-session-character-management/tactical-session-character-management.component';
import { CharacterCreationAttributeComponent } from './components/character/character-creation-attribute/character-creation-attribute.component';
import { CombatComponent } from './pages/wiki/combat/combat.component';
import { MissileAttackExecutionComponent } from './components/tactical/action-execution/missile-attack-execution/missile-attack-execution.component';
import { RaceListComponent } from './pages/race/race-list/race-list.component';
import { RaceAttributesComponent } from './components/race/race-attributes/race-attributes.component';
import { RaceResistancesComponent } from './components/race/race-resistances/race-resistances.component';
import { RaceAdolescenceSkillCategoriesComponent } from './components/race/race-adolescence-skill-categories/race-adolescence-skill-categories.component';
import { RaceAdolescenceSkillsComponent } from './components/race/race-adolescence-skills/race-adolescence-skills.component';
import { RaceSkillBonusComponent } from './components/race/race-skill-bonus/race-skill-bonus.component';
import { RaceLanguagesComponent } from './components/race/race-languages/race-languages.component';
import { RaceBasicInfoComponent } from './components/race/race-basic-info/race-basic-info.component';
import { ProfessionSkillCategoryBonusComponent } from './components/profession/profession-skill-category-bonus/profession-skill-category-bonus.component';
import { ProfessionSkillCostComponent } from './components/profession/profession-skill-cost/profession-skill-cost.component';
import { ProfessionWeaponCostComponent } from './components/profession/profession-weapon-cost/profession-weapon-cost.component';
import { WikiGlossaryComponent } from './pages/wiki/wiki-glossary/wiki-glossary.component';
import { CharacterTalentsComponent } from './components/character/character-talents/character-talents.component';
import { CharacterFlawsComponent } from './components/character/character-flaws/character-flaws.component';
import { TrainingPackageFixedSkillsComponent } from './components/training-packages/training-package-fixed-skills/training-package-fixed-skills.component';
import { TrainingPackageSelectableSkillsComponent } from './components/training-packages/training-package-selectable-skills/training-package-selectable-skills.component';
import { SignupComponent } from './pages/signup/signup.component';

import { environment } from 'src/environments/environment';
import { TacticalSessionTableComponent } from './components/tactical-session/tactical-session-table/tactical-session-table.component';
import { TrainingPackageSelectableCategoryComponent } from './components/training-packages/training-package-selectable-category/training-package-selectable-category.component';
import { TrainingPackageSelectableSkillComponent } from './components/training-packages/training-package-selectable-skill/training-package-selectable-skill.component';
import { TrainingPackageCustomizableSkillComponent } from './components/training-packages/training-package-customizable-skill/training-package-customizable-skill.component';
import { TrainingPackageCostsComponent } from './components/training-packages/training-package-costs/training-package-costs.component';
import { TrainingPackageBasicInfoComponent } from './components/training-packages/training-package-basic-info/training-package-basic-info.component';
import { TalentListComponent } from './pages/talents/talent-list/talent-list.component';
import { TalentDetailComponent } from './pages/talents/talent-detail/talent-detail.component';
import { FlawsDetailComponent } from './pages/flaws/flaws-detail/flaws-detail.component';
import { FlawsListComponent } from './pages/flaws/flaws-list/flaws-list.component';
import { MovementExecutionComponent } from './components/tactical/action-execution/movement-execution/movement-execution.component';
import { AttackResultDetailComponent } from './components/tactical/attack-result-detail/attack-result-detail.component';

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
    HomeComponent,
    DialogItemCustomizationComponent,
    ActionDeclarationMissileAttackComponent,
    ActionDeclarationMovementComponent,
    ActionDeclarationStaticManeuverComponent,
    ActionDeclarationMovingManeuverComponent,
    ActionDeclarationSpellCastComponent,
    ActionDeclarationChangeItemsComponent,
    CharacterTrainingPackagesComponent,
    TacticalSessionCharacterManagementComponent,
    CharacterCreationAttributeComponent,
    CombatComponent,
    MissileAttackExecutionComponent,
    RaceAttributesComponent,
    RaceResistancesComponent,
    RaceAdolescenceSkillCategoriesComponent,
    RaceAdolescenceSkillsComponent,
    RaceSkillBonusComponent,
    RaceLanguagesComponent,
    RaceBasicInfoComponent,
    ProfessionSkillCategoryBonusComponent,
    ProfessionSkillCostComponent,
    ProfessionWeaponCostComponent,
    WikiGlossaryComponent,
    CharacterTalentsComponent,
    CharacterFlawsComponent,
    TrainingPackageFixedSkillsComponent,
    TrainingPackageSelectableSkillsComponent,
    SignupComponent,
    TacticalSessionTableComponent,
    TrainingPackageSelectableCategoryComponent,
    TrainingPackageSelectableSkillComponent,
    TrainingPackageCustomizableSkillComponent,
    TrainingPackageCostsComponent,
    TrainingPackageBasicInfoComponent,
    TalentListComponent,
    TalentDetailComponent,
    FlawsDetailComponent,
    FlawsListComponent,
    MovementExecutionComponent,
    AttackResultDetailComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080'],
        sendAccessToken: true
      }
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
