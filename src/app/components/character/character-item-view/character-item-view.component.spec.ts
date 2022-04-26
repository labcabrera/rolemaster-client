import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItemViewComponent } from './character-item-view.component';

describe('CharacterItemViewComponent', () => {
  let component: CharacterItemViewComponent;
  let fixture: ComponentFixture<CharacterItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
