import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillUpgradeComponent } from './character-skill-upgrade.component';

describe('CharacterSkillUpgradeComponent', () => {
  let component: CharacterSkillUpgradeComponent;
  let fixture: ComponentFixture<CharacterSkillUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSkillUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSkillUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
