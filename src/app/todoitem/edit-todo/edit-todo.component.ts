import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TodoitemService } from 'src/app/services/todoitem.service';
import { FormControl, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/models/todoitem-model';



@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {


  errorDiv: boolean = false;

  constructor(public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: TodoitemService) { }

  ngOnInit(): void {
    console.log(this.data.title);
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: any) {

    if (this.data.title == "") {
      this.errorDiv = !this.errorDiv;
    }
    else {
      var editedTodo = new TodoItem();
      editedTodo.id = this.data.id;
      editedTodo.title = this.data.title;
      editedTodo.description = this.data.description;
      editedTodo.done = this.data.done;

      this.service.updateTodo(editedTodo);
      this.onClose();
    }

  }

  onClose() {
    this.dialogRef.close();
    this.service.filter('Register click');
  }

  checkBoxChanged() {
    this.data.done = !this.data.done;
    console.log(this.data.done);
  }

}

