import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RM Engine';
  showSideBar = true;

  spellIcon = environment.spellIcon;
  skillIcon = environment.skillIcon;

}
