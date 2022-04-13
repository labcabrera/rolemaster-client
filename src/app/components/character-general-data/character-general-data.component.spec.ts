import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGeneralDataComponent } from './character-general-data.component';

describe('CharacterGeneralDataComponent', () => {
  let component: CharacterGeneralDataComponent;
  let fixture: ComponentFixture<CharacterGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGeneralDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
