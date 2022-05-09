import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageFixedSkillsComponent } from './training-package-fixed-skills.component';

describe('TrainingPackageFixedSkillsComponent', () => {
  let component: TrainingPackageFixedSkillsComponent;
  let fixture: ComponentFixture<TrainingPackageFixedSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageFixedSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageFixedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
