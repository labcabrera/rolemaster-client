import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationWeaponPriorityComponent } from './character-creation-weapon-priority.component';

describe('CharacterCreationWeaponPriorityComponent', () => {
  let component: CharacterCreationWeaponPriorityComponent;
  let fixture: ComponentFixture<CharacterCreationWeaponPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreationWeaponPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationWeaponPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
