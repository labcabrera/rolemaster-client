import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackResultComponent } from './attack-result.component';

describe('AttackResultComponent', () => {
  let component: AttackResultComponent;
  let fixture: ComponentFixture<AttackResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
