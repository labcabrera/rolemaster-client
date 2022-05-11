import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlawsDetailComponent } from './flaws-detail.component';

describe('FlawsDetailComponent', () => {
  let component: FlawsDetailComponent;
  let fixture: ComponentFixture<FlawsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlawsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlawsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
