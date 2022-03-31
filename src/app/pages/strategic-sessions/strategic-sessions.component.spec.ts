import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicSessionsComponent } from './strategic-sessions.component';

describe('SessionsComponent', () => {
  let component: StrategicSessionsComponent;
  let fixture: ComponentFixture<StrategicSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
