import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';
import { MessageService } from '../shared/messaging/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  securityObject : AppUserAuth | undefined;
  returnUrl :string | undefined;

  constructor(private securityService: SecurityService,
     private msgService: MessageService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
     this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')!;
  }

  login()
  {
    this.msgService.clearAll();
    this.securityObject?.init();
    this.securityService.login(this.user)
    .subscribe(resp => {
      localStorage.setItem("AuthObject" , JSON.stringify(resp));
      this.securityObject = resp;
      if (this.returnUrl)
      {
        this.router.navigateByUrl(this.returnUrl);
      }
      else{
        this.router.navigateByUrl("home");
      }
    }
      
      );
  }
}
