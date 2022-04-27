import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalSessionCharacterManagementComponent } from './tactical-session-character-management.component';

describe('TacticalSessionCharacterManagementComponent', () => {
  let component: TacticalSessionCharacterManagementComponent;
  let fixture: ComponentFixture<TacticalSessionCharacterManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalSessionCharacterManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalSessionCharacterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
