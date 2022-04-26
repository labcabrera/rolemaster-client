import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryDetailComponent } from './skill-category-detail.component';

describe('SkillCategoryDetailComponent', () => {
  let component: SkillCategoryDetailComponent;
  let fixture: ComponentFixture<SkillCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
