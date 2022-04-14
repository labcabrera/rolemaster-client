import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalViewCharacterComponent } from './tactical-view-character.component';

describe('TacticalViewCharacterComponent', () => {
  let component: TacticalViewCharacterComponent;
  let fixture: ComponentFixture<TacticalViewCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalViewCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalViewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
