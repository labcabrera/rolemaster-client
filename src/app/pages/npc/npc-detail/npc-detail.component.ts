import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Npc } from 'src/app/model/npc';
import { NpcService } from 'src/app/services/npc.service';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.scss']
})
export class NpcDetailComponent implements OnInit {

  npc: Npc = {} as Npc;

  constructor(
    private npcService: NpcService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const npcId = String(this.route.snapshot.paramMap.get('id'));
    this.loadNpc(npcId);
  }

  loadNpc(npcId: string) {
    this.npcService.findById(npcId).subscribe(result => {
      this.npc = result;
    });
  }

}
