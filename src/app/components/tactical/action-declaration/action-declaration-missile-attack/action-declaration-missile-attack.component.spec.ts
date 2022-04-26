import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationMissileAttackComponent } from './action-declaration-missile-attack.component';

describe('ActionDeclarationMissileAttackComponent', () => {
  let component: ActionDeclarationMissileAttackComponent;
  let fixture: ComponentFixture<ActionDeclarationMissileAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationMissileAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationMissileAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
