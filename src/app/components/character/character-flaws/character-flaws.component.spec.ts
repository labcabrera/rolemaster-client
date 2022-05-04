import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFlawsComponent } from './character-flaws.component';

describe('CharacterFlawsComponent', () => {
  let component: CharacterFlawsComponent;
  let fixture: ComponentFixture<CharacterFlawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterFlawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFlawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
