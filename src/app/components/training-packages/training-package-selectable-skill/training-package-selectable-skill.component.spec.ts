import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageSelectableSkillComponent } from './training-package-selectable-skill.component';

describe('TrainingPackageSelectableSkillComponent', () => {
  let component: TrainingPackageSelectableSkillComponent;
  let fixture: ComponentFixture<TrainingPackageSelectableSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageSelectableSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageSelectableSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
