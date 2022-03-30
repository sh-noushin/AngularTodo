import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category-model';
import { CategoryResponse } from '../models/category-response';
import { pipe, Subject } from 'rxjs';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public formData= new Category();
  constructor(private http:HttpClient) { }

  readonly APIUrl='https://localhost:5001';


  getCatList(filterText:string,skipCount:number,maxResultCount:number,sorting:string): Observable<CategoryResponse>
  {
    var t:any ="";
     t = localStorage.getItem('token');
    return this.http.get<CategoryResponse>(this.APIUrl+'/Categories?FilterText='+filterText+'&SkipCount='+
    skipCount+'&MaxReasultCount='+maxResultCount+'&Sorting='+sorting 
    
        // {
        //     headers: {
        //         'Token': t
        //     }
        //   }
          
          );
    // .s
    // pipe(
    //    map((data: CategoryResponse) => {
    //      return data;
    //    }), catchError( error => {
    //      return throwError( 'Something went wrong!' );
    //    })
    // )
}


  

  addCategory(cat:Category)
  {
    
    return this.http.post(this.APIUrl+'/Categories', cat,
    {responseType: 'text'});
  }
deleteCategory(id:number)
{
  return this.http.delete(this.APIUrl+'/Categories/'+id,{responseType: 'text'} );
}

updateCategory(cat:Category)
{
 this.http.put(this.APIUrl+'/Categories/'+cat.id,cat,{responseType: 'text'}).subscribe(res =>{

  
 });

 }
  private _listeners = new Subject<any>();
  listen(): Observable<any>
  {
    return this._listeners.asObservable();

  }

  filter(filterBy: string)
  {
    this._listeners.next(filterBy);
  }
}
