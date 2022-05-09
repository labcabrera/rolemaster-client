import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPackagesComponent } from './training-packages.component';

describe('TrainingPackagesComponent', () => {
  let component: TrainingPackagesComponent;
  let fixture: ComponentFixture<TrainingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
