import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username: string = "";
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const user = new User(this.username, this.email, this.firstName, this.lastName, this.password);
    this.userService.create(user).subscribe({
      next: data => this.goHome(),
      error: error => this.errorService.displayError(error)
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

}
