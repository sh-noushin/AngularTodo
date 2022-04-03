import {Category} from './category-model';

export class TodoItem{
    id:number;
      title:string; 
      done: boolean;
      categoryId:number;
      //Category:Category;
      description:string;

      constructor()
      {
        this.id=0;
        this.done=false;
        this.title='';
        this.categoryId=0;
        this.description='';
        // this.Category = {
        //     id:0,
        //     name:''
        
        // };
        

      }
}