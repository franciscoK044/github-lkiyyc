import { TestBed } from '@angular/core/testing';

import { CarritoGymService } from '../carrito-gym.service';

describe('CarritoGymService', () => {
  let service: CarritoGymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoGymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
