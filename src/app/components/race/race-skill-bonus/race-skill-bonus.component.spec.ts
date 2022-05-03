import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSkillBonusComponent } from './race-skill-bonus.component';

describe('RaceSkillBonusComponent', () => {
  let component: RaceSkillBonusComponent;
  let fixture: ComponentFixture<RaceSkillBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceSkillBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceSkillBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
