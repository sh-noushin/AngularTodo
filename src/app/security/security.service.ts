import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();
  constructor() { }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Set user name
    this.securityObject.userName = entity.userName;

    // Create permissions based on user
    // Eventually this will be returned from a Web API call
    if (entity.userName.toLowerCase() == "admin" && entity.password == "12345678") {

      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;
      this.securityObject.canAccessUsers = true;
    }
    else {

      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;

    }

    return of(this.securityObject);
  }

  logout(): void {
    this.securityObject.init();
  }
}


