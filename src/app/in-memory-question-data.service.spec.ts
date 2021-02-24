import { TestBed } from '@angular/core/testing';

import { InMemoryQuestionDataService } from './in-memory-question-data.service';

describe('InMemoryQuestionDataService', () => {
  let service: InMemoryQuestionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryQuestionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
