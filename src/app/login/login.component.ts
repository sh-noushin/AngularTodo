import { Component, OnInit } from '@angular/core';
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

  constructor(private securityService: SecurityService,
     private msgService: MessageService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.msgService.clearAll();
    this.securityObject?.init();
    this.securityService.login(this.user)
    .subscribe(resp => this.securityObject = resp);
  }
}
