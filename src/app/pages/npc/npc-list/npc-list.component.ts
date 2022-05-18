import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Npc } from 'src/app/model/npc';
import { NpcService } from 'src/app/services/npc.service';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';
import { UniverseService } from 'src/app/services/universe.service';
import { Universe } from 'src/app/model/commons';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  npcs?: Npc[];
  universes: Universe[] = [];
  dataSource: MatTableDataSource<Npc> = new MatTableDataSource<Npc>(this.npcs);
  displayedColumns: string[] = ["name", "level", "universe"];
  universeControl = new FormControl('');

  constructor(
    private npcService: NpcService,
    private userService: UserService,
    private universeService: UniverseService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.loadUniverses();
    this.userService.findUser().subscribe({
      next: result => {
        const universeId = result.defaultUniverseId ? result.defaultUniverseId : '';
        this.universeControl.setValue(universeId)
        this.loadNpcs(universeId);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  onUniverseChange(universeId: string) {
    this.loadNpcs(universeId);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  private loadUser() {
    this.userService.findUser().subscribe({
      next: result => {
        const universeId = result.defaultUniverseId ? result.defaultUniverseId : '';
        this.universeControl.setValue(universeId)
        this.loadNpcs(universeId);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private loadUniverses() {
    this.universeService.find().subscribe({
      next: result => this.universes = result,
      error: error => this.errorService.displayError(error)
    });
  }

  private loadNpcs(universeId: string): void {
    this.npcService.find(universeId).subscribe({
      next: result => {
        this.npcs = result;
        this.dataSource.data = this.npcs;
      },
      error: error => this.errorService.displayError(error)
    });
  }


}
