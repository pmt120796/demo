import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(
    private router: Router,
    private userService: AuthService
  ) { }

  canActivate(): boolean {
    if(this.userService.getRole()) {
        this.router.navigate(['dashboard']);
        return false;
    } else {
        return true;
    }
  }
}
