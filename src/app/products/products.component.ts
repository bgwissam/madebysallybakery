import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/interfaces';
import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  title: string;
  public products: Product[] = [];
  public images = [];
  filteredProducts: Product[] = [];

  totalRecords = 0;
  pageSize = 10;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  constructor(private router: Router,
              private dataService: DataService,
              private dataFilter: DataFilterService,
              private authService: AuthService) { }

  ngOnInit() {
    this.title = 'Products';
    this.getProducts();
    this.displayImages();
  }

  filterChanged(filterText: string) {

    console.log('The product data' + this.products);
    if (filterText && this.products) {
        const props = ['productName', 'description', 'dimensions', 'servings', 'covering', 'category'];
        this.filteredProducts = this.dataFilter.filter(this.products, props, filterText);
    } else {
      this.filteredProducts = this.products;
    }
  }

  pageChanged(page: number) {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts()
    .subscribe((response: Product[]) => {
      this.products = this.filteredProducts = response;
      console.log('Logging products' + this.products);
    },
    (err: any) => console.log(err),
    () => console.log('getProduct() retrieved products'));

  }

  displayImages() {
    for (let i = 1; i < this.products.length; i ++) {
      if ( i % 4 === 1 && i !== 1) {

      }
    }
  }
}
