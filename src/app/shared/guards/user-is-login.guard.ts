import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})

export class UserIsLoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }


  canActivate(): boolean {
    if (this._authService.isUserAuthenticated()) {
        this._router.navigate(['/main-page'])
        return false
    } else {
        return true
    }
}
}