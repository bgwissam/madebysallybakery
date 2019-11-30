import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NewCustomer } from '../shared/interfaces';
import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './contactus-grid.component.html',
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactusGridComponent implements OnInit {

  imageWidth = 50;
  imageMargin = 2;
  @Input() customerList: NewCustomer[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.customerList, prop);
  }

}
