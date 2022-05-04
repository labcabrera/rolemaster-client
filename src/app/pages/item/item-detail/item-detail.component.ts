import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from 'src/app/model/item';
import { ErrorService } from 'src/app/services/error.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item = {} as Item;

  constructor(
    private itemService: ItemService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const itemId = String(this.route.snapshot.paramMap.get('id'));
    this.loadItem(itemId);
  }

  loadItem(itemId: string) {
    this.itemService.findById(itemId).subscribe({
      next: result => this.item = result,
      error: error => this.errorService.displayError(error)
    });
  }

}
