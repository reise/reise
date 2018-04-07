import { TestBed, inject } from '@angular/core/testing';

import { TempledetailsService } from './templedetails.service';

describe('TempledetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempledetailsService]
    });
  });

  it('should be created', inject([TempledetailsService], (service: TempledetailsService) => {
    expect(service).toBeTruthy();
  }));
});
