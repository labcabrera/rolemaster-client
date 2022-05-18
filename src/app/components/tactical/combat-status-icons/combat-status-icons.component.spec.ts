import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatStatusIconsComponent } from './combat-status-icons.component';

describe('CombatStatusIconsComponent', () => {
  let component: CombatStatusIconsComponent;
  let fixture: ComponentFixture<CombatStatusIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatStatusIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatStatusIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
