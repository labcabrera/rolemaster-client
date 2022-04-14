import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalViewCharacterManualEditionComponent } from './tactical-view-character-manual-edition.component';

describe('TacticalViewCharacterManualEditionComponent', () => {
  let component: TacticalViewCharacterManualEditionComponent;
  let fixture: ComponentFixture<TacticalViewCharacterManualEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalViewCharacterManualEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalViewCharacterManualEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
