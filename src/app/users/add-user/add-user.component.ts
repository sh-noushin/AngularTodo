import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user-model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    public dialogbox: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public service:UserService
   
  ) { }

  ngOnInit(): void {
    
  }
  resetComponent(form?:NgForm){
    if(form!=null)
       this.service.formData = {
      id:0,
      userName:'',
      password: ''
    }
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }
 
  onSubmit(form:any){

   // this.service.formData = form.value;
    var newUser = new User();
    newUser.userName =form.userName;
    newUser.password = form.password
    newUser.id=this.service.formData.id;

    
    this.service.addCategory(newUser).subscribe(res=>
      {
        this.resetComponent(form);
        this.onClose();
        
      }
      )
  }
}

