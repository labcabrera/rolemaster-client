import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListDetailComponent } from './spell-list-detail.component';

describe('SpellListDetailComponent', () => {
  let component: SpellListDetailComponent;
  let fixture: ComponentFixture<SpellListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
