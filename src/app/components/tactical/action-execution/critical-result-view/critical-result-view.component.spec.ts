import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalResultViewComponent } from './critical-result-view.component';

describe('CriticalResultViewComponent', () => {
  let component: CriticalResultViewComponent;
  let fixture: ComponentFixture<CriticalResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalResultViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
