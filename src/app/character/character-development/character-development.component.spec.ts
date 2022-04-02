import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDevelopmentComponent } from './character-development.component';

describe('CharacterDevelopmentComponent', () => {
  let component: CharacterDevelopmentComponent;
  let fixture: ComponentFixture<CharacterDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
