import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationMovementComponent } from './action-declaration-movement.component';

describe('ActionDeclarationMovementComponent', () => {
  let component: ActionDeclarationMovementComponent;
  let fixture: ComponentFixture<ActionDeclarationMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
