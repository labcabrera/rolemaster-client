import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectActionComponent } from './dialog-select-action.component';

describe('DialogSelectActionComponent', () => {
  let component: DialogSelectActionComponent;
  let fixture: ComponentFixture<DialogSelectActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSelectActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
