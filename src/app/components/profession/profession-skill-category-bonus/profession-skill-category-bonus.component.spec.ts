import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionSkillCategoryBonusComponent } from './profession-skill-category-bonus.component';

describe('ProfessionSkillCategoryBonusComponent', () => {
  let component: ProfessionSkillCategoryBonusComponent;
  let fixture: ComponentFixture<ProfessionSkillCategoryBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionSkillCategoryBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionSkillCategoryBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
