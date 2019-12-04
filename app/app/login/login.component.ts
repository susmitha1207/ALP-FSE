import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService } from '../services/authentication.service';
import { User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  credentials = { username: '', password: '' };
  errorMessage: string;
  user: User ;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const userName  = ((document.getElementById('username') as HTMLInputElement).value);
    const password  = ((document.getElementById('password') as HTMLInputElement).value);

    if (userName === null || userName === undefined || userName === '' ) {
      this.errorMessage = 'Enter Username.';
      return false;
    }
    if (password === null || password === undefined || password === '' ) {
      this.errorMessage = 'Enter Password.';
      return false;
    }
    this.saveUser(userName, password);
    this.authenticateUser();
    console.log('Logged In!!!!!!') ;

  }
  saveUser(userName, password) {
    localStorage.setItem('username', this.credentials.username);
    localStorage.setItem('password', this.credentials.password);
  }
  clearMessage() {
    this.errorMessage = '';
  }
  private authenticateUser() {
    // this.authService.authenticate() ;
    /*this.authService.authenticate().subscribe((userResp: User) => {
      console.log('After service call in angular');
      this.user = userResp ;
      if (this.user.isUserAuthentic === 'true') {
        this.authService.setUserInLocalStrorage(this.user) ;
        this.router.navigate(['/dashboard']);
      }
      console.log(userResp);
    });*/
    this.router.navigate(['/dashboard']);

  }
}
