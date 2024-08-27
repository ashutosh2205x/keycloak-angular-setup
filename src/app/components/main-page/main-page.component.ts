import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private readonly authorizationService: AuthService) {}
  isLoggedIn: boolean = this.authorizationService.isLoggedIn();
  userName: string = '';
  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.userName = this.authorizationService?.userName;
    }
    this.handleAuth();
  }

  async handleAuth() {
    if (this.isLoggedIn) {
      console.log('logged in...');
      // this.userIdleService.startWatching();
      // this.userIdleService
      //   .onTimerStart()
      //   .pipe(takeUntilDestroyed(this.destroyRef))
      //   .subscribe();
      // this.userIdleService
      //   .onTimeout()
      //   .pipe(takeUntilDestroyed(this.destroyRef))
      //   .subscribe(() => {
      //     alert('Your session has timed out. Please log in again.');
      // this.authenticationService.logout();
      // this.userIdleService.resetTimer();
      // });
    }
  }
  redirectToLoginPage(): void {
    this.authorizationService.redirectToLoginPage();
  }
  logout() {
    this.authorizationService.logout();
  }
}
