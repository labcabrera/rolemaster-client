import { TestBed } from '@angular/core/testing';

import { SkillCategoryService } from './skill-category.service';

describe('SkillCategoryService', () => {
  let service: SkillCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
