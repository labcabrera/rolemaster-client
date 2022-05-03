import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResistancesComponent } from './race-resistances.component';

describe('RaceResistancesComponent', () => {
  let component: RaceResistancesComponent;
  let fixture: ComponentFixture<RaceResistancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceResistancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
