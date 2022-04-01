import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionCreationComponent } from './tactical-session-creation.component';

describe('TacticalSessionCreationComponent', () => {
  let component: TacticalSessionCreationComponent;
  let fixture: ComponentFixture<TacticalSessionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
