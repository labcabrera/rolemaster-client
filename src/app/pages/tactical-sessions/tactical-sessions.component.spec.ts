import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionsComponent } from './tactical-sessions.component';

describe('TacticalSessionsComponent', () => {
  let component: TacticalSessionsComponent;
  let fixture: ComponentFixture<TacticalSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
