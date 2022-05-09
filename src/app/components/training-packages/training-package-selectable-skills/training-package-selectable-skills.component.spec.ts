import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageSelectableSkillsComponent } from './training-package-selectable-skills.component';

describe('TrainingPackageSelectableSkillsComponent', () => {
  let component: TrainingPackageSelectableSkillsComponent;
  let fixture: ComponentFixture<TrainingPackageSelectableSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageSelectableSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageSelectableSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
