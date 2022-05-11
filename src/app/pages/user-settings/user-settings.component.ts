import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user?: User;
  userClaims?: any;

  constructor(
    private userService: UserService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.readUser();
    this.readUserClaims();
  }

  readUser() {
    this.userService.findUser().subscribe({
      next: result => this.user = result,
      error: error => this.errorService.displayError(error)
    });
  }

  readUserClaims() {
    this.userService.findUserClaims().subscribe({
      next: result => this.userClaims = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
