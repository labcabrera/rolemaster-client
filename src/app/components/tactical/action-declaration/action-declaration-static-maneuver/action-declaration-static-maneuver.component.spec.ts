import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeclarationStaticManeuverComponent } from './action-declaration-static-maneuver.component';

describe('ActionDeclarationStaticManeuverComponent', () => {
  let component: ActionDeclarationStaticManeuverComponent;
  let fixture: ComponentFixture<ActionDeclarationStaticManeuverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeclarationStaticManeuverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDeclarationStaticManeuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
