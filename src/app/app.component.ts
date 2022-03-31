import { Component } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular WEB API';
  CatScreen=false;
  TodoScreen=false;

  securityObject : AppUserAuth | undefined
  constructor(private securityService: SecurityService)
  {
    this.securityObject = securityService.securityObject;
  }

  logout(): void
  {

    this.securityService.logout();
    this.securityObject = this.securityService.securityObject;
    localStorage.removeItem("AuthObject");
    }
}
