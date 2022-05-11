import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageCustomizableSkillComponent } from './training-package-customizable-skill.component';

describe('TrainingPackageCustomizableSkillComponent', () => {
  let component: TrainingPackageCustomizableSkillComponent;
  let fixture: ComponentFixture<TrainingPackageCustomizableSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageCustomizableSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageCustomizableSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
