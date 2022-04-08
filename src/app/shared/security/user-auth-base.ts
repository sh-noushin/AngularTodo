export class UserAuthBase
{
    userName:string="";
    value:string="";
    isAuthenticated: boolean = false;

    init(): void{

        this.userName="";
        this.value="";
        this.isAuthenticated = false;


    }
}
