import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceAdolescenceSkillCategoriesComponent } from './race-adolescence-skill-categories.component';

describe('RaceAdolescenceSkillCategoriesComponent', () => {
  let component: RaceAdolescenceSkillCategoriesComponent;
  let fixture: ComponentFixture<RaceAdolescenceSkillCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceAdolescenceSkillCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceAdolescenceSkillCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
