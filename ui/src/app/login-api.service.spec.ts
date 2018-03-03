import { TestBed, inject } from '@angular/core/testing';

import { LoginApiService } from './login-api.service';

describe('LoginApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginApiService]
    });
  });

  it('should be created', inject([LoginApiService], (service: LoginApiService) => {
    expect(service).toBeTruthy();
  }));
});
