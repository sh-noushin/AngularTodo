import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private service: SecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    request = request.clone({ headers: request.headers.set("Token", this.service.getAuthToken())});
    var t = localStorage.getItem('Token');

    console.log("token value inside interceptor is :"+ t);   
    return next.handle(request);  }
}
