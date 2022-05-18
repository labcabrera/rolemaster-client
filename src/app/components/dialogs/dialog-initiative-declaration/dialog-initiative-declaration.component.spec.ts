import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInitiativeDeclarationComponent } from './dialog-initiative-declaration.component';

describe('DialogInitiativeDeclarationComponent', () => {
  let component: DialogInitiativeDeclarationComponent;
  let fixture: ComponentFixture<DialogInitiativeDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInitiativeDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInitiativeDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
