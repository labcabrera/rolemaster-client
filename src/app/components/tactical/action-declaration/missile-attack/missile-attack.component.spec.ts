import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissileAttackComponent } from './missile-attack.component';

describe('MissileAttackComponent', () => {
  let component: MissileAttackComponent;
  let fixture: ComponentFixture<MissileAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissileAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissileAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
