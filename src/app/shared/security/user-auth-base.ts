export class UserAuthBase
{
    userName:string="";
    value:number = 0
    isAuthenticated: boolean = false;

    init(): void{

      this.userName = "";
      this.value = 0;
      this.isAuthenticated =false;


    }
}
