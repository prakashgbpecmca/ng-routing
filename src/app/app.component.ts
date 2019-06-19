import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isDisplayed() {
    return this.messageService.isDisplayed;
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}
  showMessage(): void {
    this.messageService.isDisplayed = true;
    this.router.navigate([{outlets: {popup: ['messages']}}]);
  }
  hideMessage(): void {
    this.messageService.isDisplayed = false;
    this.router.navigate([{outlets: {popup: null }}]);
  }
  logOut(): void {
    this.authService.logout();
      this.router.navigateByUrl('/welcome'); // removes the secondary outlet path also
   //  this.router.navigate(['/welcome']);
  }
}
