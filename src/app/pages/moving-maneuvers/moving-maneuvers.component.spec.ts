import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingManeuversComponent } from './moving-maneuvers.component';

describe('MovingManeuversComponent', () => {
  let component: MovingManeuversComponent;
  let fixture: ComponentFixture<MovingManeuversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingManeuversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingManeuversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
