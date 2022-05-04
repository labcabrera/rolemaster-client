import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Item } from 'src/app/model/item';
import { ErrorService } from 'src/app/services/error.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  displayedColumns: string[] = ["name", "type"];
  dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>(this.items);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private itemService: ItemService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  loadItems(): void {
    this.itemService.find().subscribe({
      next: result => {
        this.items = result;
        this.dataSource.data = this.items;
      },
      error: error => this.errorService.displayError(error)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
