import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { NamedKey, Universe } from 'src/app/model/commons';
import { User } from 'src/app/model/user';
import { EnumService } from 'src/app/services/enum.service';
import { ErrorService } from 'src/app/services/error.service';
import { UniverseService } from 'src/app/services/universe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user?: User;
  userClaims?: any;

  userForm: FormGroup;

  versions: NamedKey[] = [];
  universes: Universe[] = [];
  unitSystems: NamedKey[] = [];

  constructor(
    private userService: UserService,
    private universeService: UniverseService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      defaultVersion: [],
      defaultUnitSystem: [],
      defaultUniverseId: [],
      defaultBoardScale: []
    });
  }

  ngOnInit(): void {
    this.readUser();
    this.readUserClaims();
    this.readVersions();
    this.readUniverses();
    this.readUnitSystems();
  }

  saveSettings() {
    this.userService.savePreferences(this.userForm.value).subscribe({});
  }

  private readUser(): void {
    this.userService.findUser().subscribe({
      next: result => {
        this.user = result;
        this.patchUserForm(this.user);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private readUserClaims(): void {
    this.userService.findUserClaims().subscribe({
      next: result => this.userClaims = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private readVersions(): void {
    this.enumService.findRolemasterVersions().subscribe({
      next: result => this.versions = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private readUniverses(): void {
    this.universeService.find().subscribe({
      next: result => this.universes = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private readUnitSystems(): void {
    this.enumService.findUnitSystems().subscribe({
      next: result => this.unitSystems = result,
      error: error => this.errorService.displayError(error)
    }); 
  }

  private patchUserForm(user: User): void {
    this.userForm.patchValue(user);
  }

}
