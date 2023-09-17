import { TestBed } from '@angular/core/testing';

import { PublicPageService } from './public-page.service';

describe('PublicPageService', () => {
  let service: PublicPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
