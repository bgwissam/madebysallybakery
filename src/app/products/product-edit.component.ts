import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { Product } from '../shared/interfaces';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  product: Product = {
    productCovering: '',
    productDimensions: '',
    productServings: 0,
    productName: '',
    category: '',
    description: '',
    imageUrl: ''
  };

  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id !== '0') {
      if (this.isLoggedIn) {
        console.log('Id ' + id);
        this.operationText = 'Update';
      } else {
        this.operationText = 'Order This';
      }

      this.getProduct(id);
    }

  }

  getProduct(id: string) {
      this.dataService.getProduct(id)
        .subscribe((product: Product) => {
          this.product = product;
        },
        (err: any) => console.log(err));
  }


  submit() {

      if (this.product._id) {

        this.dataService.updateProduct(this.product)
          .subscribe((product: Product) => {
            if (product) {
              this.router.navigate(['/products']);
            } else {
              this.errorMessage = 'Unable to save product';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertProduct(this.product)
          .subscribe((product: Product) => {
            if (product) {
              console.log('Product was added');
              this.router.navigate(['/products']);
            } else {
              this.errorMessage = 'Unable to add product';
            }
          },
          (err: any) => console.log(err));

      }
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/products']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteProduct(this.product._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/products']);
          } else {
            this.errorMessage = 'Unable to delete product';
          }
        },
        (err) => console.log(err));
  }

  addOrder() {
    if (this.product._id) {
      this.router.navigate(['/contactus-order/' + this.product._id]);
    } else {
      this.errorMessage = 'Unable to select this item';
    }
  }


}
