import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CharacterInfo } from 'src/app/model/character-info';
import { AddCharacterItem, Item } from 'src/app/model/item';
import { NamedKey } from 'src/app/model/commons';
import { ItemService } from 'src/app/services/item.service';
import { EnumService } from 'src/app/services/enum.service';
import { CharacterItemService } from 'src/app/services/character-item.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-dialog-add-character-item',
  templateUrl: './dialog-add-character-item.component.html',
  styleUrls: ['./dialog-add-character-item.component.scss']
})
export class DialogAddCharacterItemComponent implements OnInit {


  character?: CharacterInfo;
  items: Item[] = [];
  itemPositions: NamedKey[] = [];

  addItemForm: FormGroup;
  itemFilteredOptions: Observable<Item[]>;

  constructor(
    private characterItemService: CharacterItemService,
    private itemService: ItemService,
    private enumService: EnumService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) {
    this.addItemForm = this.fb.group({
      itemId: [''],
      position: ['carried'],
      weight: [''],
      count: ['1']
    });
    this.itemFilteredOptions = this.addItemForm.controls['itemId'].valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.items.slice())),
    );
  }

  ngOnInit(): void {
    this.itemService.find().subscribe(result => this.items = result);
    this.enumService.findItemPositions().subscribe(result => this.itemPositions = result);
  }

  load(character: CharacterInfo) {
    this.character = character;
  }

  addCharacterItem() {
    this.addItemForm.value['itemId'] = this.addItemForm.value['itemId'].id;
    this.characterItemService.addItem(this.character!.id, this.addItemForm.value).subscribe({
      error: error => this.errorService.displayError(error)
    });
  }

  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();
    return this.items.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFnItem(item: any): string {
    return item && item.name ? item.name : '';
  }

}
