import { TestBed } from '@angular/core/testing';

import { CharacterGenerationUtilsService } from './character-generation-utils.service';

describe('CharacterGenerationUtilsService', () => {
  let service: CharacterGenerationUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterGenerationUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
