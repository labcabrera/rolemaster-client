import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCharacterItemComponent } from './dialog-add-character-item.component';

describe('DialogAddCharacterItemComponent', () => {
  let component: DialogAddCharacterItemComponent;
  let fixture: ComponentFixture<DialogAddCharacterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCharacterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddCharacterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
