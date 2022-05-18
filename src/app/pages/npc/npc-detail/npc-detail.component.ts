import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Npc } from 'src/app/model/npc';
import { ErrorService } from 'src/app/services/error.service';
import { NpcService } from 'src/app/services/npc.service';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.scss']
})
export class NpcDetailComponent implements OnInit {

  npc: Npc = {} as Npc;
  npcForm: FormGroup;

  constructor(
    private npcService: NpcService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.npcForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      shortDescription: [''],
      unique: [Validators.required],
      hp: ['', Validators.required],
      exhaustionPoints: ['', Validators.required],
      armorType: ['', Validators.required],
      defensiveBonus: ['', Validators.required],
      powerPoints: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const npcId = String(this.route.snapshot.paramMap.get('id'));
    this.loadNpc(npcId);
  }

  private loadNpc(npcId: string): void {
    this.npcService.findById(npcId).subscribe({
      next: result => {
        this.npc = result;
        this.updateFormData(this.npc);
        this.npcForm.disable();
      },
      error: error => this.errorService.displayError(error)
    });
  }

  private updateFormData(npc: Npc) {
    this.npcForm.patchValue({
      name: npc.name,
      shortDescription: npc.shortDescription,
      level: npc.level,
      hp: npc.hp,
      exhaustionPoints: npc.exhaustionPoints,
      armorType: npc.armorType,
      defensiveBonus: npc.defensiveBonus,
      powerPoints: npc.powerPoints ? npc.powerPoints : 0,
    });

  }

}
