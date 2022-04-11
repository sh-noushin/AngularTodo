export class UserAuthBase
{
    username:string="";
    value:number = 0
    isAuthenticated: boolean = false;

    init(): void{

      this.username = "";
      this.value = 0;
      this.isAuthenticated =false;


    }
}
