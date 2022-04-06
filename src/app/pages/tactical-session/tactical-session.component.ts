import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { map, startWith} from 'rxjs/operators';

import { Npc } from 'src/app/model/npc';
import { TacticalCharacterContext } from 'src/app/model/character-context';
import { StrategicSession, TacticalSession, TacticalSessionUpdate } from 'src/app/model/session';
import { StrategicSessionsService } from 'src/app/services/strategic-sessions.service';
import { TacticalSessionService } from 'src/app/services/tactical-session.service';
import { NpcService } from 'src/app/services/npc.service';

@Component({
  selector: 'app-tactical-session',
  templateUrl: './tactical-session.component.html',
  styleUrls: ['./tactical-session.component.scss']
})
export class TacticalSessionComponent implements OnInit {

  tacticalSession: TacticalSession = {} as TacticalSession;
  strategicSession: StrategicSession = {} as StrategicSession;
  tacticalCharacterContexts: TacticalCharacterContext[] = [];

  form: FormGroup;

  npcList: Npc[] = [];
  npcAddFormControl = new FormControl();
  npcAddFiltered: Observable<Npc[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacticalSessionService: TacticalSessionService,
    private strategicSessionService: StrategicSessionsService,
    private npcService: NpcService,
    private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: [''],
    });
    this.npcAddFiltered = this.npcAddFormControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filterStates(name) : this.npcList.slice())),
    );
    this.form.disable();
  }

  ngOnInit(): void {
    const tacticalSessionId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTacticalSession(tacticalSessionId);
    this.loadTacticalCharacterContexts(tacticalSessionId);
    this.loadNpcs();
  }

  loadTacticalSession(tacticalSessionId: string) {
    this.tacticalSessionService.findById(tacticalSessionId).subscribe(result => {
      this.tacticalSession = result;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description
      });
      this.loadStrategicSession(this.tacticalSession.strategicSessionId);
    });
  }

  loadStrategicSession(strategicSessionId: string) {
    this.strategicSessionService.findById(strategicSessionId).subscribe(result => {
      this.strategicSession = result;
      this.form.patchValue({
        strategicSessionName: this.strategicSession.name
      });
    });
  }

  loadTacticalCharacterContexts(tacticalSessionId: string) {
    this.tacticalSessionService.findTacticalCharacterContexts(tacticalSessionId).subscribe(result => {
      this.tacticalCharacterContexts = result;
    });
  }

  loadNpcs() {
    this.npcService.find().subscribe(result => this.npcList = result);
  }

  save() {
    const id = this.tacticalSession.id;
    const update = this.form.value as TacticalSessionUpdate;
    this.tacticalSessionService.update(id, update).subscribe(response => {
      this.tacticalSession = response;
      this.form.patchValue({
        name: this.tacticalSession.name,
        description: this.tacticalSession.description
      });
      this.form.disable();
    });
  }

  delete() {
    this.tacticalSessionService.delete(this.tacticalSession.id).subscribe(result => {
      this.router.navigateByUrl("/tactical-sessions");
    });
  }

  deleteTacticalCharacterContext(tacticalCharacterContextId: string) {
    this.tacticalSessionService.deleteTacticalCharacterContext(tacticalCharacterContextId).subscribe(e => {
      this.loadTacticalCharacterContexts(this.tacticalSession.id);
    });
  }

  addNpc() {
    const npcId = this.npcAddFormControl.value.id;
    this.tacticalSessionService.addNpc(this.tacticalSession.id, npcId).subscribe(result => {
      this.tacticalCharacterContexts.push(result);
    });
  }

  displayNpcOption(npc: Npc) {
    return npc && npc.name ? npc.name : '';
  }

  private _filterStates(value: string): Npc[] {
    const filterValue = value.toLowerCase();
    return this.npcList.filter(value => value.name.toLowerCase().includes(filterValue));
  }
  
  startEdit() {
    this.form.enable();
  }
  
  cancelEdit() {
    this.form.get('name')?.setValue(this.tacticalSession.name);
    this.form.get('description')?.setValue(this.tacticalSession.description);
    this.form.disable();
  }
  
  isEditMode() {
    return this.form.enabled;
  }
  
  navigateToStrategicSession() {
    this.router.navigateByUrl("/strategic-sessions/detail/" + this.strategicSession.id);
  }

  navigateToTacticalView() {
    this.router.navigateByUrl("/tactical?tacticalSessionId=" + this.tacticalSession.id);
  }

}
