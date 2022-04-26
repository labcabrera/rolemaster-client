import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationSpellCastComponent } from './action-declaration-spell-cast.component';

describe('ActionDeclarationSpellCastComponent', () => {
  let component: ActionDeclarationSpellCastComponent;
  let fixture: ComponentFixture<ActionDeclarationSpellCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationSpellCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationSpellCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
