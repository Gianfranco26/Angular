import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  login() {

    this.authService.login();
  }

  email: string;
password: string;
 
signUp() {
this.authService.SignUp(this.email, this.password);
this.email = '';
this.password = '';
}
 
signIn() {
this.authService.SignIn(this.email, this.password);
this.email = '';
this.password = '';
}
 
signOut() {
this.authService.SignOut();
}

}