import { Component, OnInit, AfterViewInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { CharacterInfo, CharacterSkill } from '../../../model/character-info';
import { CharacterService } from 'src/app/services/character-service';
import { DialogAddSkillComponent } from 'src/app/components/dialogs/dialog-add-skill/dialog-add-skill.component';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-character-skill-list',
  templateUrl: './character-skill-list.component.html',
  styleUrls: ['./character-skill-list.component.scss']
})
export class CharacterSkillListComponent implements OnInit, AfterViewInit {

  @Input() character?: CharacterInfo;
  @Input() skillDataSource: MatTableDataSource<CharacterSkill> | undefined;

  @Output() onCharacterUpdated = new EventEmitter<CharacterInfo>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = [
    'skillId', 'categoryId', 'group',
    'raceRanks', 'adolescenceRanks', 'trainingPackageRanks', 'developmentRanks', 'consolidatedRanks',
    'bonusCategory', 'bonusRanks',
    'developmentCost', 'totalRanks', 'totalBonus', 'options'];
  includeUndevelopedSkills: boolean = true;

  constructor(
    private characterService: CharacterService,
    private errorService: ErrorService,
    private addSkillDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.skillDataSource!.paginator = this.paginator!;
  }

  updateRank(skillId: string, value: number): void {
    this.characterService.upgradeSkill(this.character!.id, skillId, value).subscribe({
      next: result => {
        this.character = result;
        this.onCharacterUpdated.emit(result);
      },
      error: error => this.errorService.displayError(error)
    });
  }

  openDialogAddSkill() {
    var dialogRef = this.addSkillDialog.open(DialogAddSkillComponent);
    dialogRef.componentInstance.load(this.character!);
    dialogRef.afterClosed().subscribe(result => {
      this.character = dialogRef.componentInstance.character;
      this.onCharacterUpdated.emit(this.character);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.skillDataSource!.filter = filterValue.trim().toLowerCase();
  }

}
