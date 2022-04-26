import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTrainingPackagesComponent } from './character-training-packages.component';

describe('CharacterTrainingPackagesComponent', () => {
  let component: CharacterTrainingPackagesComponent;
  let fixture: ComponentFixture<CharacterTrainingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterTrainingPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTrainingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
