import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionLogTableComponent } from './tactical-session-log-table.component';

describe('TacticalSessionLogTableComponent', () => {
  let component: TacticalSessionLogTableComponent;
  let fixture: ComponentFixture<TacticalSessionLogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionLogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
