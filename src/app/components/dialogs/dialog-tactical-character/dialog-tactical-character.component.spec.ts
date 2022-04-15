import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTacticalCharacterComponent } from './dialog-tactical-character.component';

describe('DialogTacticalCharacterComponent', () => {
  let component: DialogTacticalCharacterComponent;
  let fixture: ComponentFixture<DialogTacticalCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTacticalCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTacticalCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
