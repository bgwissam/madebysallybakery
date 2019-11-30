import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Customer } from './customer';
import { DataService } from '../core/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NewCustomer, Product } from '../shared/interfaces';
import { DatePipe } from '@angular/common';


function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmEmailControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmEmailControl.value) {
    return null;
  }

  return {match: true};
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { range : true};
    }

    return null;
  };
}

@Component({
  templateUrl: './contactus.component.html',
  providers: [DatePipe]
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  customer = new Customer();
  emailMessage: string;
  confirmEmailMessage: string;
  errorMessage: string;

  product: Product = {
    productCovering: '',
    productDimensions: '',
    productServings: 0,
    productName: '',
    category: '',
    description: '',
    imageUrl: ''
  };

  get addresses(): FormArray {

    return this.contactUsForm.get('addresses') as FormArray;
  }

private validationMessaged = {
  required: 'Please enter your email address.',
  email: 'Please enter a valid email address.',
  confirmEmail: 'Please enter the same email address.'
};

myDate = new Date();

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit() {

    const id = this.route.snapshot.params.orderId;
    if (id !== '0') {
      console.log('Id ' + id);
      this.getProduct(id);
    } else {
      console.log ('No order was selected');
    }

    this.contactUsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email',
      orderType1: '',
      orderType2: '',
      orderType3: '',
      orderType4: '',
      servings: '',
      occassion: '',
      dateOfOccassion: '',
      dateOfApplication: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
      theme: '',
      productId: '',
      productImage: null,
      productName: ''
     });


    this.contactUsForm.get('notification').valueChanges.subscribe( value =>
      this.setNotification(value));

    const emailControl = this.contactUsForm.get('email');
    emailControl.valueChanges.pipe(
        debounceTime(1000)
        ).subscribe(
          value => this.setMessage(emailControl)
        );


  }

  getProduct(id: string) {
    this.dataService.getProduct(id)
      .subscribe((product: Product) => {
        this.product = product;
        this.contactUsForm = this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: ['', [Validators.required, Validators.maxLength(50)]],
          email: ['', [Validators.required, Validators.email]],
          phone: '',
          notification: 'email',
          orderType1: '',
          orderType2: '',
          orderType3: '',
          orderType4: '',
          servings: '',
          occassion: '',
          dateOfOccassion: '',
          dateOfApplication: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
          theme: '',
          productId: product._id,
          productImage: product.imageUrl,
          productName: product.productName
        });
      },
      (err: any) => console.log(err));
}

  save() {
        this.dataService.insertNewCustomer(this.contactUsForm.value)
        .subscribe((contactUsForm: NewCustomer) => {
          if (contactUsForm) {
            console.log('customer was inserted successfully');
            this.router.navigate(['/welcome']);
          } else {
            this.errorMessage = 'Unable to add new customer';
          }
        },
        (err) => console.log(err));
  }

  setNotification(notifyvia: string): void {
    const phoneControl = this.contactUsForm.get('phone');
    if (notifyvia === 'text' || notifyvia === 'whatsapp') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessaged[key]).join(' ');
    }
  }

  setConfirmMessage(c: AbstractControl): void {
    this.confirmEmailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.confirmEmailMessage = Object.keys(c.errors).map(
        key => this.validationMessaged[key]).join(' ');
    }
  }
}
