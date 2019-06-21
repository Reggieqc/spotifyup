import { TestBed } from '@angular/core/testing';

import { AlbumCreatedService } from './album-created.service';

describe('AlbumCreatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumCreatedService = TestBed.get(AlbumCreatedService);
    expect(service).toBeTruthy();
  });
});
