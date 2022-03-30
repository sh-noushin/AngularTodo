import { Category } from "./category-model";

export class CategoryResponse{
    totalCount:number;
    items:Category[];

    constructor()
    {
        this.totalCount=0;
        this.items=[
            {
                id:0,
                name:''
            }
        ];


    }
}