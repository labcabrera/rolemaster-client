import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { TrainingPackage } from 'src/app/model/training-packages';
import { TrainingPackageService } from 'src/app/services/training-packages.service';


@Component({
  selector: 'app-training-packages',
  templateUrl: './training-packages.component.html',
  styleUrls: ['./training-packages.component.scss']
})
export class TrainingPackagesComponent implements OnInit {

  races?: TrainingPackage[];

  displayedColumns: string[] = [ "name", "type" ];
  dataSource: MatTableDataSource<TrainingPackage> = new MatTableDataSource<TrainingPackage>(this.races);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private trainingPackageService: TrainingPackageService) { }

  ngOnInit(): void {
    this.getTrainingPackages();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getTrainingPackages(): void {
    this.trainingPackageService.find().subscribe(result => {
      this.races = result;
      this.dataSource.data = this.races;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
