import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItemCustomizationComponent } from './dialog-item-customization.component';

describe('DialogItemCustomizationComponent', () => {
  let component: DialogItemCustomizationComponent;
  let fixture: ComponentFixture<DialogItemCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogItemCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogItemCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
