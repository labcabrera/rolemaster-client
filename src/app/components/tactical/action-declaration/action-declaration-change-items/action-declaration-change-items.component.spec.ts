import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationChangeItemsComponent } from './action-declaration-change-items.component';

describe('ActionDeclarationChangeItemsComponent', () => {
  let component: ActionDeclarationChangeItemsComponent;
  let fixture: ComponentFixture<ActionDeclarationChangeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationChangeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationChangeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
