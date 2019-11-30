import { Injectable } from '@angular/core';

// Using the new HttpClientModule now. If you're still on < Angular 4.3 see the
// data.service.ts file instead (simplify rename it to the name
// of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse,
        Product, IProductResponse, NewCustomer, NewCustomerResponse} from '../shared/interfaces';
import { ProductsGridComponent } from '../products/products-grid.component';
import { Router } from '@angular/router';

@Injectable()
export class DataService {

    baseUrl = '/api/customers';
    baseStatesUrl = '/api/states';
    baseProductUrl = '/api/products';
    baseCustomerOrderUrl = '/api/orders';

    constructor(private http: HttpClient,
                private router: Router) {

    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl)
            .pipe(
                   map((customers: ICustomer[]) => {
                       this.calculateCustomersOrderTotal(customers);
                       return customers;
                   }),
                   catchError(this.handleError)
                );
    }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                    map((res) => {
                        // Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        const customers = res.body as ICustomer[];
                        this.calculateCustomersOrderTotal(customers);
                        return {
                            results: customers,
                            totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }

    getCustomer(id: string): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomerResponse>(this.baseUrl, customer)
            .pipe(
                   map((data) => {
                       console.log('insertCustomer status: ' + data.status);
                       return data.customer;
                   }),
                   catchError(this.handleError)
                );
    }

    updateCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.put<ICustomerResponse>(this.baseUrl + '/' + customer._id, customer)
            .pipe(
                   map((data) => {
                       console.log('updateCustomer status: ' + data.status);
                       return data.customer;
                   }),
                   catchError(this.handleError)
                );
    }

    deleteCustomer(id: string): Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseStatesUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    // Get list of all products, modify product, add product, and delete a product
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseProductUrl)
        .pipe(
          map((products: Product[]) => {
              return products;
          }),
          catchError(this.handleError)
        );
  }

    getProduct(id: string): Observable<Product> {
      return this.http.get<Product>(this.baseProductUrl + '/' + id)
        .pipe(
          catchError(this.handleError)
        );
    }


    updateProduct(product: Product): Observable<Product> {
      return this.http.put<IProductResponse>(this.baseProductUrl + '/' + product._id, product)
        .pipe(
          map((data) => {
              console.log('Updating Product ' + data.status);
              return data.product;
          }),
          catchError(this.handleError)
        );
    }

    insertProduct(product: Product): Observable<Product> {
      return this.http.post<IProductResponse>(this.baseProductUrl, product)
        .pipe(
          map((data) => {
              console.log('Inserting Product ' + data.status);
              this.router.navigate(['/welcome']);
              return data.product;
          }),
          catchError(this.handleError)
        );
    }

    deleteProduct(id: string): Observable<boolean> {
      return this.http.delete<boolean>(this.baseProductUrl + '/' + id)
        .pipe(
          catchError(this.handleError)
        );
    }
    // will catch all the errors returned by any REST function and return it to the user
    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }
    getCustomerOrders(): Observable<NewCustomer[]> {
      return this.http.get<NewCustomer[]>(this.baseCustomerOrderUrl)
        .pipe(
          map((customerList: NewCustomer[]) => {
            return customerList;
          }),
          catchError(this.handleError)
        );
    }

    getNewCustomer(id: string): Observable<NewCustomer> {
        return this.http.get<NewCustomer>(this.baseCustomerOrderUrl + '/' + id)
        .pipe(
          catchError(this.handleError)
        );
    }

    // Contact list insert new customer order
    insertNewCustomer(customer: NewCustomer[]): Observable<NewCustomer> {
        return this.http.post<NewCustomerResponse>(this.baseCustomerOrderUrl, customer)
          .pipe(
            map((data) => {
              console.log('Inserting new Customer ' + data.status);
              this.router.navigate(['/welcome']);
              return data.customer;
            }),
            catchError(this.handleError)
          );
    }

    deleteNewCustomer(id: string): Observable<boolean> {
      return this.http.delete<boolean>(this.baseCustomerOrderUrl + '/' + id)
        .pipe(
          catchError(this.handleError)
        );
    }

    // handles errors
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(error || 'Node.js server error');
    }

}
