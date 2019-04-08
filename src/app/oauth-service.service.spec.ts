import { TestBed, inject } from '@angular/core/testing';

import { OauthServiceService } from './oauth-service.service';

describe('OauthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OauthServiceService]
    });
  });

  it('should be created', inject([OauthServiceService], (service: OauthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
