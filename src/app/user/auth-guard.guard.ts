import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth(state.url);
  }
  checkAuth(url: string): boolean {
    this.authService.urlPath = url;
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}
