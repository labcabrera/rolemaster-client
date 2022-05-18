import { TestBed } from '@angular/core/testing';

import { TacticalCharacterService } from './tactical-character.service';

describe('TacticalCharacterService', () => {
  let service: TacticalCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacticalCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
