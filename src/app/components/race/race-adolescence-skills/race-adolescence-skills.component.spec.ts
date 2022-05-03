import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceAdolescenceSkillsComponent } from './race-adolescence-skills.component';

describe('RaceAdolescenceSkillsComponent', () => {
  let component: RaceAdolescenceSkillsComponent;
  let fixture: ComponentFixture<RaceAdolescenceSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceAdolescenceSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceAdolescenceSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
