import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  readonly APIUrl='https://localhost:5001';

  getLoginToken(input:AuthRequest)
  {
    
    return this.http.post<AuthResponse>(this.APIUrl+'/Auth', input,
    );
  }

  getAuthToken():any {

    var t: any= "";
    t = localStorage.getItem('token');
    return  t;
    }

}
