import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { MessageService } from '../core/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  adminUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
     return !!this.adminUser;
  }

  constructor(private messageService: MessageService) { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin' && password === 'admin') {
      this.adminUser = {
        id: 1,
        userName,
        isAdmin: true,

      };
      this.messageService.addMessage('Admin login');
      return;
    } else if (userName === 'wiss' && password === 'wiss') {
      this.currentUser = {
        id: 2,
        userName,
        isAdmin: false
      };
      this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    } else {
      this.messageService.addMessage(`Failed to login`);
      }
  }

  logout(): void {
    this.adminUser = null;
    this.currentUser = null;
  }
}
