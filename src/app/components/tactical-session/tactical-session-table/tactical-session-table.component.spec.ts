import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionTableComponent } from './tactical-session-table.component';

describe('TacticalSessionTableComponent', () => {
  let component: TacticalSessionTableComponent;
  let fixture: ComponentFixture<TacticalSessionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
