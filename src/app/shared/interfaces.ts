import { ModuleWithProviders } from '@angular/core';
import { Binary } from 'selenium-webdriver/firefox';

export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface Product {
  _id?: string;
  productCovering: string;
  productDimensions: string;
  productServings: number;
  productName: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface NewCustomer {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone: string;
  notification: string;
  orderType1: string;
  orderType2: string;
  orderType3: string;
  orderType4: string;
  servings: string;
  occassion: string;
  dateOfOccassion: Date;
  dateOfApplication: Date;
  theme: string;
  productId: string;
  productImage: Binary;
  productName: string;
}


export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IRouting {
    routes: ModuleWithProviders;
    components: any[];
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    customer: ICustomer;
    status: boolean;
    error: string;
}

export interface IProductResponse {
    product: Product;
    status: boolean;
    error: string;
}

export interface NewCustomerResponse {
  customer: NewCustomer;
  status: boolean;
  error: string;
}

