import { TodoItem } from "./todoitem-model";

export class TodoitemResponse{

totalCount:number;
items:TodoItem[];

constructor()
{
    this.totalCount=0;
    this.items=[];


}
}