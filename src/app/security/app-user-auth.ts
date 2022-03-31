import { UserAuthBase } from "../shared/security/user-auth-base";


export class AppUserAuth extends UserAuthBase {
    canAccessTodos: boolean = false;
    canAccessCategories: boolean = false;
    canAccessLogs: boolean = false;
    canAccessSettings: boolean = false;
    canAddTodos: boolean = false;
    canEditTodos: boolean = false;
    canDeleteTodos: boolean = false;
  
    override init(): void {
     
      super.init();
      this.canAccessTodos = false;
      this.canAccessCategories = false;
      this.canAccessLogs = false;
      this.canAccessSettings = false;
      this.canAddTodos = false;
      this.canEditTodos = false;
      this.canDeleteTodos = false;
    }
    getValueOfProperty(obj: any ,key: string):boolean{
    let ret = obj[key];
    return ret;
  }
  }
  