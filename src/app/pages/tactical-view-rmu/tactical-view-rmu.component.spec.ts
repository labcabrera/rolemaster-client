import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalViewRmuComponent } from './tactical-view-rmu.component';

describe('TacticalViewRmuComponent', () => {
  let component: TacticalViewRmuComponent;
  let fixture: ComponentFixture<TacticalViewRmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalViewRmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalViewRmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
