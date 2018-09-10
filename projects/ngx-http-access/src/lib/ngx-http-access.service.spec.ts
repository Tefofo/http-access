import { TestBed, inject } from '@angular/core/testing';

import { NgxHttpAccessService } from './ngx-http-access.service';

describe('NgxHttpAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHttpAccessService]
    });
  });

  it('should be created', inject([NgxHttpAccessService], (service: NgxHttpAccessService) => {
    expect(service).toBeTruthy();
  }));
});
