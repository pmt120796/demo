import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
localStorage.setItem("logged", localStorage.getItem("logged") || 'false');

@Injectable()
export class AuthService {
    
    isLogin = localStorage.getItem("logged") === 'true' ? true : false;

  constructor(private router: Router) {}
  public isAuthenticated(username: any, password: any): boolean {
      
      if((username === 'admin' && password === 'admin') || this.isLogin) {
          this.isLogin = true;
          localStorage.setItem("logged", 'true');
          this.router.navigate(['dashboard']);
      }
    
    return this.isLogin;
  }

  public getRole(): boolean {
      return this.isLogin;
  }

  public logout() {
    this.isLogin = false;
    localStorage.setItem("logged", "false");
    this.router.navigate(['']);
  }
}