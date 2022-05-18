import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalViewRmssComponent } from './tactical-view-rmss.component';

describe('TacticalViewComponent', () => {
  let component: TacticalViewRmssComponent;
  let fixture: ComponentFixture<TacticalViewRmssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalViewRmssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalViewRmssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
