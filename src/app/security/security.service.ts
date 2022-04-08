import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user-model';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();
  public formData= new User();
  constructor(private http:HttpClient) { }

  readonly APIUrl='https://localhost:5001';


  login(entity: AppUser): Observable<AppUserAuth> {
    // Set user name
    this.securityObject.userName = entity.userName;
  
    if (entity.userName.toLowerCase() == "admin" && entity.password == "12345678") {

      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;
      this.securityObject.canAccessUsers = true;
     

    }
   else
   {

      var tempresult =  this.http.post<number>(this.APIUrl+'/Auth' , entity)
      .subscribe(resp => {
        localStorage.setItem("AuthObject" , JSON.stringify(resp));
      });
     if (tempresult !=null)
     {
      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;
      

     }
    }   
    return of(this.securityObject);
        
  }

  logout(): void {
    this.securityObject.init();
  }
}


