import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  securityObject : AppUserAuth = new AppUserAuth();
  returnUrl :string | undefined;

  constructor(private securityService: SecurityService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
     this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')!;
  }

  login()
  {
    
    this.securityService.login(this.user);
    this.securityObject.username  = this.securityService.securityObject.username;
    if (this.returnUrl)
      {
        this.router.navigateByUrl(this.returnUrl);
      }
      else{
        this.router.navigateByUrl("home");
      }
   
     
  }
}
