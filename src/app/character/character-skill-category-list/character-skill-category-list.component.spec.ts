import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillCategoryListComponent } from './character-skill-category-list.component';

describe('CharacterSkillCategoryListComponent', () => {
  let component: CharacterSkillCategoryListComponent;
  let fixture: ComponentFixture<CharacterSkillCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSkillCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSkillCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
