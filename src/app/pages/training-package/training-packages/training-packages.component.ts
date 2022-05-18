import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

import { TrainingPackage } from 'src/app/model/training-packages';
import { TrainingPackageService } from 'src/app/services/training-packages.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';


@Component({
  selector: 'app-training-packages',
  templateUrl: './training-packages.component.html',
  styleUrls: ['./training-packages.component.scss']
})
export class TrainingPackagesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  trainingPackages?: TrainingPackage[];
  displayedColumns: string[] = ["name", "version", "type"];
  dataSource: MatTableDataSource<TrainingPackage> = new MatTableDataSource<TrainingPackage>(this.trainingPackages);
  versionControl = new FormControl('');

  constructor(
    private trainingPackageService: TrainingPackageService,
    private userService: UserService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.userService.findUser().subscribe({
      next: result => {
        const version = result.defaultVersion ? result.defaultVersion : '';
        this.versionControl.setValue(version)
        this.getTrainingPackages(version);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  onVersionChange(version: string) {
    this.getTrainingPackages(version);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getTrainingPackages(version: string): void {
    this.trainingPackageService.find(version).subscribe({
      next: result => {
        this.trainingPackages = result;
        this.dataSource.data = this.trainingPackages;
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
