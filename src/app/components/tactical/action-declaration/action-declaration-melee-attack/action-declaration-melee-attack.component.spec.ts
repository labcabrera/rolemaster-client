import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationMeleeAttackComponent } from './action-declaration-melee-attack.component';

describe('ActionDeclarationMeleeAttackComponent', () => {
  let component: ActionDeclarationMeleeAttackComponent;
  let fixture: ComponentFixture<ActionDeclarationMeleeAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationMeleeAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationMeleeAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
