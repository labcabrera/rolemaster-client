import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  itemForm: FormGroup;

  constructor(
    private itemService: ItemService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      craftDuration: [''],
      commonWeight: this.fb.group({
        min: [''],
        max: ['']
      }),
      multipleItem: ['', Validators.required],
      fumble: [],
      breakage: [],
    });
    this.itemForm.disable();
  }

  ngOnInit(): void {
    const itemId = String(this.route.snapshot.paramMap.get('id'));
    this.loadItem(itemId);
  }

  private loadItem(itemId: string): void {
    this.itemService.findById(itemId).subscribe({
      next: result => {
        this.item = result;
        this.loadFormData(this.item);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private loadFormData(item: Item): void {
    this.itemForm.patchValue({
      name: item.name,
      type: item.type,
      commonWeight: item.commonWeight,
      craftDuration: item.craftDuration,
      multipleItem: item.multipleItem,
      fumble: item.fumble,
      breakage: item.breakage,
    });
  }

}
