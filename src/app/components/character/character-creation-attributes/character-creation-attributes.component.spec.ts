import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationAttributesComponent } from './character-creation-attributes.component';

describe('CharacterCreationAttributesComponent', () => {
  let component: CharacterCreationAttributesComponent;
  let fixture: ComponentFixture<CharacterCreationAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreationAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
