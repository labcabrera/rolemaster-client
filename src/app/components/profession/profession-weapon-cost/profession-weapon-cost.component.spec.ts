import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionWeaponCostComponent } from './profession-weapon-cost.component';

describe('ProfessionWeaponCostComponent', () => {
  let component: ProfessionWeaponCostComponent;
  let fixture: ComponentFixture<ProfessionWeaponCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionWeaponCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionWeaponCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
