import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CharacterInfo } from '../../../model/character-info';
import { CharacterService } from '../../../services/character-service';

@Component({
  selector: 'app-characters',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, AfterViewInit {

  characters: CharacterInfo[] = [];

  displayedColumns: string[] = [ "name", "level", "race", "profession", "created" ];
  dataSource: MatTableDataSource<CharacterInfo> = new MatTableDataSource<CharacterInfo>(this.characters);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe(c => {
      this.characters = c;
      this.dataSource.data = this.characters;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
