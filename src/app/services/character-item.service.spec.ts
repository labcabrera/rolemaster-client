import { TestBed } from '@angular/core/testing';

import { CharacterItemService } from './character-item.service';

describe('CharacterItemService', () => {
  let service: CharacterItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
