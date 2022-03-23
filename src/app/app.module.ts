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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealmsComponent } from './realms/realms.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    RealmsComponent,
    CharactersComponent,
    CharacterDetailComponent,
    SessionsComponent,
    SessionDetailComponent,
    CharacterCreationComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
