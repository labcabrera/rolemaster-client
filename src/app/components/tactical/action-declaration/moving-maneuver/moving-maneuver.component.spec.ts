import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingManeuverComponent } from './moving-maneuver.component';

describe('MovingManeuverComponent', () => {
  let component: MovingManeuverComponent;
  let fixture: ComponentFixture<MovingManeuverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingManeuverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingManeuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
