import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTacticalCharacterEditionComponent } from './dialog-tactical-character-edition.component';

describe('TacticalViewCharacterManualEditionComponent', () => {
  let component: DialogTacticalCharacterEditionComponent;
  let fixture: ComponentFixture<DialogTacticalCharacterEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTacticalCharacterEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTacticalCharacterEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
