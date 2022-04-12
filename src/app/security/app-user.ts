import { UserBase } from "../shared/security/user-base";

export class AppUser extends UserBase
{
    init() :void{
        this.username="";
        this.password="";
        this.value = 0;
        
    }
}