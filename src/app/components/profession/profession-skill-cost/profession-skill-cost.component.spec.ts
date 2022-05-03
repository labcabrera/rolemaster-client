import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionSkillCostComponent } from './profession-skill-cost.component';

describe('ProfessionSkillCostComponent', () => {
  let component: ProfessionSkillCostComponent;
  let fixture: ComponentFixture<ProfessionSkillCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionSkillCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionSkillCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
