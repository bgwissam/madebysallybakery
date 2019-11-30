import { Injectable } from '@angular/core';

import { ICustomer, Product } from '../shared/interfaces';

@Injectable()
export class TrackByService {

  customer(index: number, customer: ICustomer) {
    return customer._id;
  }

  product(index: number, product: Product) {
    return product._id;
  }
}
