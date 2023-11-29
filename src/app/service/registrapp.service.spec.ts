import { TestBed } from '@angular/core/testing';

import { RegistrappService } from './registrapp.service';


describe('RegistrappService', () => {
  let service: RegistrappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
