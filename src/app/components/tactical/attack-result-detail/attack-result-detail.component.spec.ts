import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackResultDetailComponent } from './attack-result-detail.component';

describe('AttackResultDetailComponent', () => {
  let component: AttackResultDetailComponent;
  let fixture: ComponentFixture<AttackResultDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackResultDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
