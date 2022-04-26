import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeAttackExecutionComponent } from './melee-attack-execution.component';

describe('MeleeAttackExecutionComponent', () => {
  let component: MeleeAttackExecutionComponent;
  let fixture: ComponentFixture<MeleeAttackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeleeAttackExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeAttackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
