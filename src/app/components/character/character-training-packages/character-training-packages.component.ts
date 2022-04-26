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

@Component({
  selector: 'app-character-training-packages',
  templateUrl: './character-training-packages.component.html',
  styleUrls: ['./character-training-packages.component.scss']
})
export class CharacterTrainingPackagesComponent implements OnInit {

  @Input() character?: CharacterInfo;

  addForm: FormGroup;
  selectedTrainingPackage: FormControl = new FormControl('');

  trainingPackages: TrainingPackage[] = [];
  skillCategories: SkillCategory[] = [];
  skills: Skill[] = [];
  availableTrainingPackages: any[] = [];
  cost: number | undefined;

  constructor(
    private trainingPackageService: TrainingPackageService,
    private skillCategoryService: SkillCategoryService,
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
    this.skillCategoryService.getSkillCategories().subscribe({
      next: results => this.skillCategories = results,
      error: error => this.errorService.displayError(error)
    });
    this.skillService.getSkills().subscribe({
      next: results => this.skills = results,
      error: error => this.errorService.displayError(error)
    });
  }

  loadAvailableTrainingPackages() {
    this.availableTrainingPackages = [];
    this.trainingPackages.forEach(e => {
      //TODO filter not acquired
      var tp = {
        id: e.id,
        name: e.name
      }
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
          ranks: [0]
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
          skillId: [],
          ranks: [0]
        });
        skillSelection.push(skillSelectionValue);
      });
      this.addForm.addControl('skillSelection', skillSelection);
    }
  }

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
    console.log("Filtering categories: ", categories);
    return this.skills.filter(skill => {
      return categories.includes(skill.categoryId);
    });
  }

  addTrainingPackage() {
  }

}
