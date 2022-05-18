import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditHpComponent } from './dialog-edit-hp.component';

describe('DialogEditHpComponent', () => {
  let component: DialogEditHpComponent;
  let fixture: ComponentFixture<DialogEditHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditHpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
