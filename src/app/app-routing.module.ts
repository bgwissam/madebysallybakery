import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { IRouting } from './shared/interfaces';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsGridComponent } from './products/products-grid.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit.component';
import { LoginComponent } from './user/login.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ContactusListComponent } from './contactus/contactus-list.component';
import { ContactusGridComponent } from './contactus/contactus-grid.component';
import { NewOrderComponent } from './contactus/neworder.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path : 'welcome', component: WelcomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductEditComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/:id', component: CustomerEditComponent},
  { path: 'contactus-list', component: ContactusListComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'contactus-order/:orderId', component: ContactUsComponent},
  { path: 'contactus/:id', component: NewOrderComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/welcome' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ CustomersComponent,
                        CustomerEditComponent,
                        CustomerEditReactiveComponent,
                        CustomersGridComponent,
                        ProductsComponent,
                        ProductsGridComponent,
                        ProductEditComponent,
                        LoginComponent,
                        ContactUsComponent,
                        ContactusGridComponent,
                        ContactusListComponent,
                        NewOrderComponent ];
}
