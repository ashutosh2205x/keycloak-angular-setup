import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly keycloakService: KeycloakService) {}
  async redirectToLoginPage() {
    return await this.keycloakService.login();
  }

  get userName(): string {
    return this.keycloakService.getUsername();
  }
  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  async logout(): Promise<void> {
    await this.keycloakService.logout('');
  }
}
