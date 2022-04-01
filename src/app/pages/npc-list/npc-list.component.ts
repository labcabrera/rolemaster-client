import { Component, OnInit } from '@angular/core';

import { Npc } from 'src/app/model/npc';
import { NpcService } from 'src/app/services/npc.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit {

  displayedColumns: string[] = [ "name", "level", "unique"];
  npcs?: Npc[];

  constructor(private npcService: NpcService) { }

  ngOnInit(): void {
    this.loadNpcs();
  }
  
  loadNpcs() {
    this.npcService.find().subscribe(r => this.npcs = r);
  }

}
