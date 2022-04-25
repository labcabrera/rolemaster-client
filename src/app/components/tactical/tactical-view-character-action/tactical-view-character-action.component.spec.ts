import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalViewCharacterActionComponent } from './tactical-view-character-action.component';

describe('TacticalViewCharacterActionComponent', () => {
  let component: TacticalViewCharacterActionComponent;
  let fixture: ComponentFixture<TacticalViewCharacterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalViewCharacterActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalViewCharacterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
