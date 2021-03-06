import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from 'src/app/model/item';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const itemId = String(this.route.snapshot.paramMap.get('id'));
    this.loadItem(itemId);
  }

  loadItem(itemId: string) {
    this.itemService.findById(itemId).subscribe(result => {
      this.item = result;
    });
  }

}
