import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CharacterInfo } from 'src/app/model/character-info';
import { SkillCategory } from 'src/app/model/skill-category';
import { TrainingPackage } from 'src/app/model/training-packages';
import { Skill } from 'src/app/model/skill';
import { SkillCategoryService } from 'src/app/services/skill-category.service';
import { TrainingPackageService } from 'src/app/services/training-packages.service';
import { ErrorService } from 'src/app/services/error.service';
import { SkillService } from 'src/app/services/skill.service';
import { CharacterService } from 'src/app/services/character-service';

@Component({
  selector: 'app-character-training-packages',
  templateUrl: './character-training-packages.component.html',
  styleUrls: ['./character-training-packages.component.scss']
})
export class CharacterTrainingPackagesComponent implements OnInit {

  @Input() character?: CharacterInfo;

  addForm: FormGroup;
  selectedTrainingPackage: FormControl = new FormControl('');

  acquiredTrainingPackages: string[] = [];

  trainingPackages: TrainingPackage[] = [];
  availableTrainingPackages: any[] = [];

  skillCategories: SkillCategory[] = [];
  skills: Skill[] = [];
  cost: number | undefined;

  constructor(
    private trainingPackageService: TrainingPackageService,
    private skillCategoryService: SkillCategoryService,
    private characterService: CharacterService,
    private skillService: SkillService,
    private errorService: ErrorService,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      trainingPackageId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.trainingPackageService.find().subscribe({
      next: results => {
        this.trainingPackages = results;
        this.loadAvailableTrainingPackages();
      },
      error: error => this.errorService.displayError(error)
    });
    this.skillCategoryService.getSkillCategories('rmss').subscribe({
      next: results => this.skillCategories = results,
      error: error => this.errorService.displayError(error)
    });
    this.skillService.getSkills('rmss').subscribe({
      next: results => this.skills = results,
      error: error => this.errorService.displayError(error)
    });
    this.acquiredTrainingPackages = Object.keys(this.character!['trainingPackages']).map(function (e) { return e; });
  }

  loadAvailableTrainingPackages() {
    this.availableTrainingPackages = this.trainingPackages.filter(e => {
      return  this.acquiredTrainingPackages.indexOf(e.id) < 0;
    });
  }

  getTrainingPackageOptionName(trainingPackage: any) {
    const professionId = this.character?.professionId;
    if (!trainingPackage.costByProfession || !trainingPackage.costByProfession[professionId!]) {
      return trainingPackage.name;
    }
    return `${trainingPackage.name} (${trainingPackage.costByProfession[professionId!]})`;
  }

  onTrainingPackageSelection() {
    const costs = this.selectedTrainingPackage.value.costByProfession;
    const professionId = this.character?.professionId;
    this.cost = costs[professionId!];
    this.addForm.patchValue({
      trainingPackageId: this.selectedTrainingPackage.value.id
    });
    this.configureForm(this.selectedTrainingPackage.value);
  }

  configureForm(trainingPackage: any) {
    this.addForm.removeControl("categorySelection");
    this.addForm.removeControl("skillSelection");
    if (trainingPackage.selectableSkillCategoryList) {
      const categorySelection: FormArray = this.fb.array([]);
      const categoryList: any[] = trainingPackage.selectableSkillCategoryList;
      categoryList.forEach(e => {
        const categorySelectionValue: FormGroup = this.fb.group({
          key: [e.key, Validators.required],
          categoryId: [e.categoryId, Validators.required],
          group: [e.group],
          maxRanks: [e.ranks],
          description: [e.description],
          ranks: [e.ranks]
        });
        categorySelection.push(categorySelectionValue);
      });
      this.addForm.addControl('categorySelection', categorySelection);
    }
    if (trainingPackage.selectableSkillList) {
      const skillSelection: FormArray = this.fb.array([]);
      const skillList: any[] = trainingPackage.selectableSkillList;
      skillList.forEach(e => {
        const skillSelectionValue: FormGroup = this.fb.group({
          key: [e.key, Validators.required],
          categories: [e.categories, Validators.required],
          maxRanks: [e.ranks],
          maxSkills: [e.skills],
          description: [e.description],
          skillId: ['', Validators.required],
          ranks: [e.ranks]
        });
        skillSelection.push(skillSelectionValue);
      });
      this.addForm.addControl('skillSelection', skillSelection);
    }
  }

  /*
  getAcquiredTrainingPackages(character: CharacterInfo) {
    return Object.keys(character!['trainingPackages']).map(function (e) {
      const key = e;
      const type = character!['trainingPackages'][e];
      return `${key} (${type})`;
    });
  }
  */

  get categorySelections(): FormArray {
    return this.addForm.get('categorySelection') as FormArray;
  }

  get skillSelections(): FormArray {
    return this.addForm.get('skillSelection') as FormArray;
  }

  getSkillCategoriesByGroup(group: string) {
    return this.skillCategories.filter(e => e.group === group);
  }

  getSkillsByCategory(categories: string[]) {
    return this.skills.filter(skill => {
      return categories.includes(skill.categoryId);
    });
  }

  getRankOptions(maxRanks: number): number[] {
    if (maxRanks == 1) {
      return [1];
    }
    var result = [];
    for (var i = 0; i <= maxRanks; i++) {
      result.push(i)
    }
    return result;
  }

  addTrainingPackage() {
    this.characterService.upgradeTrainingPackage(this.character!.id, this.addForm.value).subscribe({
      next: result => {
        this.character = result;
        this.selectedTrainingPackage.setValue({});
        this.addForm.removeControl("categorySelection");
        this.addForm.removeControl("skillSelection");
      },
      error: error => this.errorService.displayError(error)
    });
  }

}
