import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Category } from 'src/app/models/category-model';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     public service: CategoryService) { }
  
  
    ngOnInit(): void {
  
     
        
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
  
  onSubmit(form:any) {
  var editedCategory = new Category();
  editedCategory.id = form.id;
  editedCategory.name= form.name;
  
  this.service.updateCategory(editedCategory);
  this.onClose();
  
  }
  
  onClose()
  {
    this.dialogRef.close();
    this.service.filter('Register click');
  }
  
  }
  
