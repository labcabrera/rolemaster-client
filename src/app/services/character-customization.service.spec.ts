import { TestBed } from '@angular/core/testing';

import { CharacterCustomizationService } from './character-customization.service';

describe('CharacterCustomizationService', () => {
  let service: CharacterCustomizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCustomizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
