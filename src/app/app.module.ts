import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule} from '@angular/material/button'; 
import { MatNativeDateModule} from '@angular/material/core';
import { MatListModule} from '@angular/material/list'
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatSliderModule} from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu'; 
import { MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatExpansionModule} from '@angular/material/expansion'; 
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatTableModule} from '@angular/material/table';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealmsComponent } from './realms/realms.component';
import { SessionListComponent } from './pages/strategic-session-list/strategic-session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { ProfessionDetailComponent } from './profession-detail/profession-detail.component';
import { SkillCategoryListComponent } from './skill-category-list/skill-category-list.component';
import { SkillSelectComponent } from './skill-select/skill-select.component';

import { CharacterListComponent } from './character/character-list/characters.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterCreationComponent } from './character/character-creation/character-creation.component';
import { CharacterDevelopmentComponent } from './character/character-development/character-development.component';
import { CharacterSkillCategoryListComponent } from './character/character-skill-category-list/character-skill-category-list.component';
import { CharacterSkillListComponent } from './character/character-skill-list/character-skill-list.component';
import { CharacterAttributesComponent } from './character/character-attributes/character-attributes.component';
import { CharacterBasicInfoComponent } from './character/character-basic-info/character-basic-info.component';
import { CharacterViewComponent } from './character/character-view/character-view.component';
import { TacticalViewComponent } from './tactical-view/tactical-view.component';
import { TacticalSessionsComponent } from './pages/tactical-sessions/tactical-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    RealmsComponent,
    TacticalSessionsComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    SessionListComponent,
    SessionDetailComponent,
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
    TacticalViewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    HttpClientModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    FlexLayoutModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
