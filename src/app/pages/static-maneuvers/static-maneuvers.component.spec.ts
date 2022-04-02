import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticManeuversComponent } from './static-maneuvers.component';

describe('StaticManeuversComponent', () => {
  let component: StaticManeuversComponent;
  let fixture: ComponentFixture<StaticManeuversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticManeuversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticManeuversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
