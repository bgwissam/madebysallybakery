import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { AuthService } from '../core/auth.service';
import { NewCustomer } from '../shared/interfaces';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus-list.component.html'
})
export class ContactusListComponent implements OnInit {

  title: string;
  customerList: NewCustomer[] = [];
  filteredCustomers: NewCustomer[] = [];

  totalRecords = 0;
  pageSize = 10;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  constructor(private router: Router,
              private dataService: DataService,
              private dataFilter: DataFilterService,
              private authService: AuthService) {}

  ngOnInit() {
    this.title = 'Customer List';
    this.getCustomerOrders();

  }

  filterChanged(filterText: string) {

    console.log('The customer list data ' + this.customerList);
    if (filterText && this.customerList) {
      const props = ['firstName', 'lastName', 'email', 'phone'];
      this.filteredCustomers = this.dataFilter.filter(this.customerList, props, filterText);
    } else {
      this.filteredCustomers = this.customerList;
    }
  }

  pageChanged(page: number) {
    this.getCustomerOrders();
  }

  getCustomerOrders() {
    this.dataService.getCustomerOrders()
    .subscribe((response: NewCustomer[]) => {
      this.customerList = this.filteredCustomers = response;
    },
    (err: any) => console.log(err),
    () => console.log('getCustomerOrders() retrieved customer list'));
  }
}
