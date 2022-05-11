import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageCostsComponent } from './training-package-costs.component';

describe('TrainingPackageCostsComponent', () => {
  let component: TrainingPackageCostsComponent;
  let fixture: ComponentFixture<TrainingPackageCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
