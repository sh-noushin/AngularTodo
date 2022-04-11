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
    this.securityObject.username = entity.username;
  
   // return this.http.post<any>(this.APIUrl+'/Auth' , entity);
    if (entity.username.toLowerCase() == "admin" && entity.password == "12345678") {

      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;
      this.securityObject.canAccessUsers = true;
      this.securityObject.canAccessHome = true;

     
    }
   else
   {

      var tempresult =  this.http.post<AppUser>(this.APIUrl+'/Auth' , entity)
       .subscribe(resp => {
         localStorage.setItem("AuthObject" , JSON.stringify(resp));
         localStorage.setItem('Token', resp.value.toString());

          var t = localStorage.getItem('Token');
          console.log("token value inside security service is :"+ t);    

      });
     if (tempresult !=null)
     {
      this.securityObject.isAuthenticated = true;
      this.securityObject.canAccessTodos = true;
      this.securityObject.canAccessCategories = true;
      this.securityObject.canAccessHome = true;

      

     }
    }   
    return of(this.securityObject);
        
  }
hello(): Observable<any> {
  return this.http.get('https://localhost:5001/TodoAuth',{responseType: 'text'});
}
  logout(): void {
    this.securityObject.init();
  }

  getAuthToken():any {

    var t: any;
    t = localStorage.getItem('Token');
    return  t;
    }

}


