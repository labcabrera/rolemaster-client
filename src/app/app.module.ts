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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealmsComponent } from './realms/realms.component';
import { CharacterListComponent } from './character-list/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterDevelopmentComponent } from './character-development/character-development.component';
import { CharacterSkillCategoryListComponent } from './character-skill-category-list/character-skill-category-list.component';
import { CharacterSkillListComponent } from './character-skill-list/character-skill-list.component';
import { CharacterAttributesComponent } from './character-attributes/character-attributes.component';
import { SkillCategoryListComponent } from './skill-category-list/skill-category-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { ProfessionDetailComponent } from './profession-detail/profession-detail.component';
import { CharacterBasicInfoComponent } from './character-basic-info/character-basic-info.component';



@NgModule({
  declarations: [
    AppComponent,
    RealmsComponent,
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
    CharacterBasicInfoComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
