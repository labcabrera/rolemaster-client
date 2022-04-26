import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionExecutionComponent } from './dialog-action-execution.component';

describe('DialogActionExecutionComponent', () => {
  let component: DialogActionExecutionComponent;
  let fixture: ComponentFixture<DialogActionExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActionExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
