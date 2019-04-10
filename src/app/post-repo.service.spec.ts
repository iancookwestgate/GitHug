import { TestBed, inject } from '@angular/core/testing';

import { PostRepoService } from './post-repo.service';

describe('PostRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostRepoService]
    });
  });

  it('should be created', inject([PostRepoService], (service: PostRepoService) => {
    expect(service).toBeTruthy();
  }));
});
