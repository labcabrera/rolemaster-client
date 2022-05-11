import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageSelectableCategoryComponent } from './training-package-selectable-category.component';

describe('TrainingPackageSelectableCategoryComponent', () => {
  let component: TrainingPackageSelectableCategoryComponent;
  let fixture: ComponentFixture<TrainingPackageSelectableCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageSelectableCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageSelectableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
