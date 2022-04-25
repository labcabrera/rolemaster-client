import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticManeuverComponent } from './static-maneuver.component';

describe('StaticManeuverComponent', () => {
  let component: StaticManeuverComponent;
  let fixture: ComponentFixture<StaticManeuverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticManeuverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticManeuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
