import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationAttributeComponent } from './character-creation-attribute.component';

describe('CharacterCreationAttributeComponent', () => {
  let component: CharacterCreationAttributeComponent;
  let fixture: ComponentFixture<CharacterCreationAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreationAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
