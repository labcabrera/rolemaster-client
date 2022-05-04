import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiGlossaryComponent } from './wiki-glossary.component';

describe('WikiGlossaryComponent', () => {
  let component: WikiGlossaryComponent;
  let fixture: ComponentFixture<WikiGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiGlossaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
