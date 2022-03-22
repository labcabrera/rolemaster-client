import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'sessions', component: SessionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
