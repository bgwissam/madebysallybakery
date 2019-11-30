import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../shared/interfaces';
import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsGridComponent implements OnInit {


  @Input() images = 4;
  @Input() products: Product[] = [];

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private sorter: Sorter,
              public trackby: TrackByService,
              private authService: AuthService) { }


  ngOnInit() {

  }

  sort(prop: string) {
        this.sorter.sort(this.products, prop);
    }

}
