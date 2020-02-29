import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  isError = true;
  constructor(public auth: AuthService, private router: Router) {
    this.auth.getRole() ? this.router.navigate(['dashboard']) : '';
   }

  ngOnInit(): void {
    
  }

  login() {
    this.isError = this.auth.isAuthenticated(this.username, this.password);
  }
}
