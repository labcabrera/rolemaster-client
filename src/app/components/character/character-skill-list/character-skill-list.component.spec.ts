import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillListComponent } from './character-skill-list.component';

describe('CharacterSkillListComponent', () => {
  let component: CharacterSkillListComponent;
  let fixture: ComponentFixture<CharacterSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSkillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
