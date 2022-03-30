import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
import { Inject } from '@angular/core';
import { Category } from 'src/app/models/category-model';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddCatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    public service:CategoryService
   
   ) { 

          
   }


  ngOnInit(): void {
    
  }
  resetComponent(form?:NgForm){
    if(form!=null)
       this.service.formData = {
      id:0,
      name:''
    }
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }
 
  onSubmit(form:any){

   // this.service.formData = form.value;
    var newCategory = new Category();
    newCategory.name =form.name;
    newCategory.id=this.service.formData.id;

    
    this.service.addCategory(newCategory).subscribe(res=>
      {
        this.resetComponent(form);
        this.onClose();
        
      }
      )
  }
}
