import { TestBed } from '@angular/core/testing';

import { TacticalSessionService } from './tactical-session.service';

describe('TacticalSessionsService', () => {
  let service: TacticalSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacticalSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
