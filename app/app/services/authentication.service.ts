import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authServerUrl = environment.authServerUrl;
  private user: User;
  constructor(private httpClient: HttpClient) { }
  authenticate(): Observable<any> {
    return this.httpClient.get<User>(this.authServerUrl + 'login');
  }
  setUserInLocalStrorage(user) {
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.emailId);
    localStorage.setItem('id', user.id);
    localStorage.setItem('role', user.role);
    localStorage.setItem('userAuthentic', user.isUserAuthentic);
  }
}
