import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceLanguagesComponent } from './race-languages.component';

describe('RaceLanguagesComponent', () => {
  let component: RaceLanguagesComponent;
  let fixture: ComponentFixture<RaceLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
