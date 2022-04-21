import { TestBed } from '@angular/core/testing';

import { ActionDeclarationFormService } from './action-declaration-form.service';

describe('ActionDeclarationFormService', () => {
  let service: ActionDeclarationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionDeclarationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
