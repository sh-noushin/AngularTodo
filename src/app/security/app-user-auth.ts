import { UserAuthBase } from "../shared/security/user-auth-base";


export class AppUserAuth extends UserAuthBase {
    canAccessTodos: boolean = false;
    canAddTodos: boolean = false;
    canEditTodos: boolean = false;
    canDeleteTodos: boolean = false;


    canAccessCategories: boolean = false;  
    canAddCategories: boolean = false;
    canEditCategories: boolean = false;
    canDeleteCategories: boolean = false;

    canAccessHome : boolean = false;
  
    override init(): void {
     
      super.init();
      this.canAccessTodos = false;        
      this.canAddTodos = false;
      this.canEditTodos = false;
      this.canDeleteTodos = false;

      this.canAccessCategories = false;
      this.canAddCategories = false;
      this.canEditCategories = false;
      this.canDeleteCategories = false;
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
      if(key.localeCompare("canAddTodos")!=0)
      {
        ret = obj.canAddTodos;
        return ret;
      }
      if(key == "canEditTodos")
      {
        ret = obj.canEditTodos;
      }
      if(key.localeCompare("canDeleteTodos")!=0)
      {
        ret = obj.canDeleteTodos;
        return ret;
      }

      if(key.localeCompare("canAddCategories")!=0)
      {
        ret = obj.canAddCategories;
        return ret;
      }
      if(key.localeCompare("canEditCategories")!=0)
      {
        ret = obj.canEditCategories;
        return ret;
      }
      if(key.localeCompare("canDeleteCategories")!=0)
      {
        ret = obj.canDeleteCategories;
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
  