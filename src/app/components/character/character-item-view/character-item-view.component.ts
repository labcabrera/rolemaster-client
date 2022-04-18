import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CharacterInfo } from 'src/app/model/character-info';
import { CharacterItem } from 'src/app/model/item';
import { NamedKey } from 'src/app/model/commons';
import { CharacterItemService } from 'src/app/services/character-item.service';
import { EnumService } from 'src/app/services/enum.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { DialogAddCharacterItemComponent } from '../../dialogs/dialog-add-character-item/dialog-add-character-item.component';

@Component({
  selector: 'app-character-item-view',
  templateUrl: './character-item-view.component.html',
  styleUrls: ['./character-item-view.component.scss']
})
export class CharacterItemViewComponent implements OnInit {

  @Input() character?: CharacterInfo;

  items: CharacterItem[] = [];
  itemPositions: NamedKey[] = [];

  dataSource = new MatTableDataSource<CharacterItem>([]);
  displayedColumns: string[] = ['name', 'count', 'weight', 'position', 'delete'];

  constructor(
    private characterItemService: CharacterItemService,
    private enumService: EnumService,
    private addItemDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadCharacterItems();
    this.enumService.findItemPositions().subscribe(results => this.itemPositions = results);
  }

  loadCharacterItems() {
    this.characterItemService.findCharacterItems(this.character!.id).subscribe(result => {
      this.items = result;
      this.sortItems();
      this.dataSource.data = this.items;
    });
  }

  openDialogAddCharacterItem() {
    var dialogRef = this.addItemDialog.open(DialogAddCharacterItemComponent);
    dialogRef.componentInstance.load(this.character!);
    dialogRef.afterClosed().subscribe(result => {
      this.loadCharacterItems();
    });
  }

  deleteItem(characterItem: CharacterItem) {
    this.characterItemService.deleteCharacterItem(characterItem.id).subscribe(result => {
      this.loadCharacterItems();
    });
  }

  updateItemPosition(item: CharacterItem, position: string) {
    this.characterItemService.updateItemPosition(item.id, position).subscribe(result => {
      this.loadCharacterItems();
    });
  }

  checkPositionEnabled(item: CharacterItem, position: string) {
    if (position === 'carried' || position === 'stored') {
      return true;
    }
    if (position === 'main-hand') {
      return item.type === 'weapon';
    }
    if (position === 'off-hand') {
      return item.type === 'weapon' || item.armorType === 'shield';
    }
    if (position === 'equipped') {
      return item.type === 'armor-piece';
    }
    return false;
  }

  sortItems() {
    this.items.sort(function (a, b) {
      var xa = 0;
      var xb = 0;
      switch (a.position) {
        case "main-hand":
          xa = 3;
          break;
      }
      switch (b.position) {
      }
      if (xa > xb) {
        console.log("-1: ", a, ", ", b);
        return -1;
      } else if (xa < xb) {
        return -0;
      }
      return a.name.localeCompare(b.name);
    });
  }

}
