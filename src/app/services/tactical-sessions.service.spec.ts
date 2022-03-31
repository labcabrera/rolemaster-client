import { TestBed } from '@angular/core/testing';

import { TacticalSessionsService } from './tactical-sessions.service';

describe('TacticalSessionsService', () => {
  let service: TacticalSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacticalSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
