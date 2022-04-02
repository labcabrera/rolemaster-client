import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBasicInfoComponent } from './character-basic-info.component';

describe('CharacterBasicInfoComponent', () => {
  let component: CharacterBasicInfoComponent;
  let fixture: ComponentFixture<CharacterBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
