import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rr-plus';
  constructor(private bnIdle: BnNgIdleService, private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (await this.auth.isLoggedIn()) {
      this.bnIdle.startWatching(1200).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          console.log('session expired');
          this.logout();
        }
      });
    }
  }

  logout() {
    this.auth.logout();
  }
}
