import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../models/todoitem-model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { TodoitemResponse } from '../models/todoitem-response'; 

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  public formData= new TodoItem();
  readonly APIUrl='https://localhost:5001';


  constructor(private http:HttpClient) { }

  getTodoList(filterText:string,skipCount:number,maxResultCount:number,sorting:string): Observable<TodoitemResponse>
  {
    return this.http.get<TodoitemResponse>(this.APIUrl+'/TodoItems/FilteredTodoItems?FilterText='+filterText+'&SkipCount='+
    skipCount+'&MaxReasultCount='+maxResultCount+'&Sorting='+sorting);

  }

  addTodo(todo:TodoItem)
  {
    
    return this.http.post(this.APIUrl+'/TodoItems', todo,
    {responseType: 'text'});
  }
deleteTodo(id:number)
{
  return this.http.delete(this.APIUrl+'/TodoItems/'+id,{responseType: 'text'} );
}

updateTodo(todo:TodoItem)
{
 this.http.put(this.APIUrl+'/TodoItems/'+todo.Id,todo,{responseType: 'text'}).subscribe(res =>{

  
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
