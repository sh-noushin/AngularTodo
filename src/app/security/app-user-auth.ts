import { UserAuthBase } from "../shared/security/user-auth-base";


export class AppUserAuth extends UserAuthBase {
    canAccessTodos: boolean = false;
    
    canAccessCategories: boolean = false;  
    canAccessUsers: boolean = false;  
    canAccessHome : boolean = false;
  
    override init(): void {
     
      super.init();
      this.canAccessTodos = false;        
      this.canAccessCategories = false;
      this.canAccessUsers = false;
      this.canAccessHome = false;

      
    }
    getValueOfProperty(obj: any ,key: string):boolean{

      
      var ret  = false;

      if(key.localeCompare("canAccessTodos")!=0)
      {
        ret = obj.canAccessTodos;
        return ret;
      }
      if(key.localeCompare("canAccessCategories")!=0)
      {
        ret = obj.canAccessCategories;
        return ret;
      }
      

      if(key.localeCompare("canAccessUsers")!=0)
      {
        ret = obj.canAccessUsers;
        return ret;
      }
      
      if(key.localeCompare("canSccessHome")!=0)
      {
        ret = obj.canAccessHome;
        return ret;
      }
      else
      {
        return ret;
      }
      
      
  }
  }
  