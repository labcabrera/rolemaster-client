import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackageBasicInfoComponent } from './training-package-basic-info.component';

describe('TrainingPackageBasicInfoComponent', () => {
  let component: TrainingPackageBasicInfoComponent;
  let fixture: ComponentFixture<TrainingPackageBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackageBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackageBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
