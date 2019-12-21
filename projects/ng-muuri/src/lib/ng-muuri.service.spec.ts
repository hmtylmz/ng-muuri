import { TestBed } from '@angular/core/testing';

import { NgMuuriService } from './ng-muuri.service';

describe('NgMuuriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMuuriService = TestBed.get(NgMuuriService);
    expect(service).toBeTruthy();
  });
});
