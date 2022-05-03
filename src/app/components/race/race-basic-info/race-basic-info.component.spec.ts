import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceBasicInfoComponent } from './race-basic-info.component';

describe('RaceBasicInfoComponent', () => {
  let component: RaceBasicInfoComponent;
  let fixture: ComponentFixture<RaceBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
