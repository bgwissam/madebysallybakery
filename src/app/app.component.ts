import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { AuthService } from './core/auth.service';
import { MessageService } from './core/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  pageTitle = 'Made By Sally';
  bodytext: string;
  loading = true;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }


  constructor(private authService: AuthService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: ModalService) { }

  ngOnInit() {
    this.bodytext = '+961 76 809 138';
  }

  // checkRouterEvent(routerEvent: Event) {
  //     if (routerEvent instanceof NavigationStart) {
  //       this.loading = true;
  //     }

  //     if (routerEvent instanceof NavigationEnd ||
  //         routerEvent instanceof NavigationError ||
  //         routerEvent instanceof NavigationCancel) {
  //           this.loading = false;
  //         }
  // }

  // displayMessage(): void {
  //   this.router.navigate([{ outlets: { popup: ['messages']}}]);
  //   this.messageService.isDisplayed = true;
  // }

  // hideMessage(): void {
  //   this.router.navigate([ {outlets: { popup: null }}]);
  //   this.messageService.isDisplayed = false;
  // }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  logOut(): void {
    this.authService.logout();
  }
}
