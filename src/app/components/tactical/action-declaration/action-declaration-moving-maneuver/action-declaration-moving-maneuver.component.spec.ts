import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationMovingManeuverComponent } from './action-declaration-moving-maneuver.component';

describe('ActionDeclarationMovingManeuverComponent', () => {
  let component: ActionDeclarationMovingManeuverComponent;
  let fixture: ComponentFixture<ActionDeclarationMovingManeuverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationMovingManeuverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationMovingManeuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
