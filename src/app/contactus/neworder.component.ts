import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { NewCustomer } from '../shared/interfaces';

@Component({
  selector: 'app-new-customer',
  templateUrl: './neworder.component.html'
})
export class NewOrderComponent implements OnInit {

  customer: NewCustomer = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    notification: '',
    orderType1: '',
    orderType2: '',
    orderType3: '',
    orderType4: '',
    servings: '',
    occassion: '',
    dateOfOccassion: null,
    dateOfApplication: null,
    theme: '',
    productId: '',
    productImage: null,
    productName: ''
  };

  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Update';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getNewCustomer(id);

  }

  getNewCustomer(id: string) {
      this.dataService.getNewCustomer(id)
        .subscribe((customer: NewCustomer) => {
          this.customer = customer;
        },
        (err: any) => console.log(err),
        () => console.log('getNewCustomer() retreived data'));
  }


  submit() {

      // if (this.customer._id) {

      //   this.dataService.update(this.customer)
      //     .subscribe((customer: NewCustomer) => {
      //       if (customer) {
      //         this.router.navigate(['/products']);
      //       } else {
      //         this.errorMessage = 'Unable to save product';
      //       }
      //     },
      //     (err: any) => console.log(err));

      // }
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/contactus-list']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteNewCustomer(this.customer._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/contactus-list']);
          } else {
            this.errorMessage = 'Unable to delete product';
          }
        },
        (err) => console.log(err));
  }

}
