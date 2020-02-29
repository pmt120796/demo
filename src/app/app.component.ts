import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isLoginPage = true;
  constructor(private auth: AuthService, private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if(this.location.path() === '') this.isLoginPage = true;
      else this.isLoginPage = false;
  });
  }
  ngOnInit(): void {
    // console.log(this.location.path())
  }
  
  logout() {
    this.auth.logout();
  }
}
