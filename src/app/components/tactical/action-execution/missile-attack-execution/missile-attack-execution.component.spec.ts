import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissileAttackExecutionComponent } from './missile-attack-execution.component';

describe('MissileAttackExecutionComponent', () => {
  let component: MissileAttackExecutionComponent;
  let fixture: ComponentFixture<MissileAttackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissileAttackExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissileAttackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
