import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementExecutionComponent } from './movement-execution.component';

describe('MovementExecutionComponent', () => {
  let component: MovementExecutionComponent;
  let fixture: ComponentFixture<MovementExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
