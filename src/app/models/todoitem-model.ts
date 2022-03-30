import {Category} from './category-model';

export class TodoItem{
    Id:number;
      Title:string; 
      Done: boolean;
      CategoryId:number;
      Category:Category;
      Description:string;

      constructor()
      {
        this.Id=0;
        this.Done=false;
        this.Title='';
        this.CategoryId=0;
        this.Description='';
        this.Category = {
            id:0,
            name:''
        
        };
        

      }
}