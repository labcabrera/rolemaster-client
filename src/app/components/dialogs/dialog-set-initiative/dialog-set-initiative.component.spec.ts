import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSetInitiativeComponent } from './dialog-set-initiative.component';

describe('DialogSetInitiativeComponent', () => {
  let component: DialogSetInitiativeComponent;
  let fixture: ComponentFixture<DialogSetInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSetInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSetInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
