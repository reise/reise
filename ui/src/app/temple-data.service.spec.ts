import { TestBed, inject } from '@angular/core/testing';

import { TempleDataService } from './temple-data.service';

describe('TempleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempleDataService]
    });
  });

  it('should be created', inject([TempleDataService], (service: TempleDataService) => {
    expect(service).toBeTruthy();
  }));
});
