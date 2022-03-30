import { Component, OnInit, Input } from '@angular/core';
import { AuthRequest } from '../models/auth-request';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() username:string='';
  @Input() password:string='';
  datasource:number=0;

  constructor(public service:AuthenticationService) { }

  ngOnInit(): void {
  }

  onClick(){

    var logininfo= new AuthRequest();
    logininfo.username =this.username;
    logininfo.password = this.password;

    this.service.getLoginToken(logininfo).subscribe(data =>{
      this.datasource =(data.value);
      localStorage.setItem('token', this.datasource.toString());
      console.log(localStorage.getItem('token'));
     
    });

  
     

  }

}
