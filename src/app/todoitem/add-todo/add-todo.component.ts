import { Component, Input, OnInit } from '@angular/core';
import { TodoitemService } from 'src/app/services/todoitem.service';
import { TodoItem } from 'src/app/models/todoitem-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryResponse } from 'src/app/models/category-response';
import { NgForm } from '@angular/forms';




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

  todos: TodoItem[] | undefined;
  isDone: boolean = false;
  errorDiv: boolean = false;
  newTodo: TodoItem = new TodoItem();

  public categoryItems: Category[] = [{
    id: 0,
    name: ''
  }];
  selectedCategory: Category | undefined;


  constructor(private catService: CategoryService,
    private todoService: TodoitemService,
    public dialogbox: MatDialogRef<AddTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryResponse

  ) { }


  ngOnInit(): void {

    this.reload();

  }

  onClose() {
    this.dialogbox.close();
    this.todoService.filter('');
  }

  onSubmit(form: any) {


    if (this.newTodo.title == "" || this.selectedCategory?.id == null) {
      this.errorDiv = !this.errorDiv;
    }
    else {

      this.newTodo.categoryId = this.selectedCategory?.id;
      this.newTodo.done = this.isDone;
      this.todoService.addTodo(this.newTodo).subscribe(res => {
        this.resetComponent(form);
        this.onClose();

      }
      )
    }

  }

  resetComponent(form?: NgForm) {
    if (form != null)
      this.todoService.formData = {
        id: 0,
        title: '',
        description: '',
        done: false,
        categoryId: 0
      }
  }


  reload() {


    this.catService.getAllCatList()
      .subscribe(data => {

        this.categoryItems = data;
        console.log(data);

      }
      );

  }

  setSelected(e: any) {
    this.selectedCategory = e.value;
    console.log(this.selectedCategory?.name);

  }
  checkBoxChanged() {
    this.isDone = !this.isDone;
    console.log(this.isDone);
  }
}
