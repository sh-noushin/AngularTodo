import { Component, Input, OnInit} from '@angular/core';
import { TodoitemService } from 'src/app/services/todoitem.service';
import { TodoItem } from 'src/app/models/todoitem-model';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryResponse } from 'src/app/models/category-response';



export interface SelectOptionModel {
  name: string;
  value: any;
}


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos : TodoItem[]| undefined;
  isDone:boolean = false;
  public categoryItems:Category[]=[{
    id:0,
    name:''
  }];
  selectedCategory:Category | undefined;
  

  constructor(private catService :CategoryService,
    private todoService:TodoitemService,
    public dialogbox: MatDialogRef<AddTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryResponse

    ) { }

  

  ngOnInit(): void {
  
   this.reload();
     
  }

  onClose(){
    this.dialogbox.close();
    this.todoService.filter('');
  }

  onSubmit(form:any){

  }

 reload()
{

  
  this.catService.getAllCatList()
      .subscribe(data =>{
    
          this.categoryItems = data;
          console.log(data);
     
    }
    );
        
}
  
setSelected(e:any)
{
  this.selectedCategory=e.value;
  console.log(this.selectedCategory?.name);
 
}
checkBoxChanged()
{
  this.isDone = ! this.isDone;
  console.log(this.isDone);
}
}
