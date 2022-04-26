import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicSessionCreationComponent } from './strategic-session-creation.component';

describe('StrategicSessionCreationComponent', () => {
  let component: StrategicSessionCreationComponent;
  let fixture: ComponentFixture<StrategicSessionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicSessionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicSessionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
