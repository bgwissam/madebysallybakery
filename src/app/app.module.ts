import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductsGridComponent } from './products/products-grid.component';
import { ProductEditComponent } from './products/product-edit.component';
import { LoginComponent } from './user/login.component';
import { MessageComponent } from './message/message.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ContactusListComponent } from './contactus/contactus-list.component';
import { ContactusGridComponent } from './contactus/contactus-grid.component';
import { NewOrderComponent } from './contactus/neworder.component';
import { ModalModule } from './modal';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,   // Singleton objects
    SharedModule,  // Shared (multi-instance) objects
    ModalModule
  ],
  declarations: [ AppComponent,
                  AppRoutingModule.components,
                  WelcomeComponent,
                  ProductsComponent,
                  ProductsGridComponent,
                  ProductEditComponent,
                  LoginComponent,
                  MessageComponent,
                  ContactUsComponent,
                  ContactusGridComponent,
                  ContactusListComponent,
                  NewOrderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
