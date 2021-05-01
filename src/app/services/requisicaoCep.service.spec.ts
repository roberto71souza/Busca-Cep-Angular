/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequisicaoCepService } from './requisicaoCep.service';

describe('Service: RequisicaoCep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisicaoCepService]
    });
  });

  it('should ...', inject([RequisicaoCepService], (service: RequisicaoCepService) => {
    expect(service).toBeTruthy();
  }));
});
