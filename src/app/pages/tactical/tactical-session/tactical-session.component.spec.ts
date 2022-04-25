import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionComponent } from './tactical-session.component';

describe('TacticalSessionComponent', () => {
  let component: TacticalSessionComponent;
  let fixture: ComponentFixture<TacticalSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
