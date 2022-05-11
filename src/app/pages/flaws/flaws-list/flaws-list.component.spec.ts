import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlawsListComponent } from './flaws-list.component';

describe('FlawsListComponent', () => {
  let component: FlawsListComponent;
  let fixture: ComponentFixture<FlawsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlawsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlawsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
