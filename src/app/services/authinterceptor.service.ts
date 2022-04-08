import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from "@angular/common/http";
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

   
   
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): import("rxjs").Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set("Token", this.service.getAuthToken())});
    return next.handle(req);
  }
  constructor(private service: SecurityService) {}
}
