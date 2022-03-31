import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicSessionComponent } from './strategic-session.component';

describe('SessionDetailComponent', () => {
  let component: StrategicSessionComponent;
  let fixture: ComponentFixture<StrategicSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
