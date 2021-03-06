import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const usr = localStorage.getItem('username');
    const pwd = localStorage.getItem('password');

    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        .set('Authorization', 'Basic ' + btoa(usr + ':' + pwd))
    });
    return next.handle(xhr);
  }
}
