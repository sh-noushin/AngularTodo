import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { AddCatComponent } from './category/add-cat/add-cat.component';
import { EditCatComponent } from './category/edit-cat/edit-cat.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddTodoComponent } from './todoitem/add-todo/add-todo.component';
import { EditTodoComponent } from './todoitem/edit-todo/edit-todo.component';
import { ShowTodoComponent } from './todoitem/show-todo/show-todo.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoginComponent } from './login/login.component';
import { ValidationMessageComponent } from './shared/messaging/validation-message.component';
import { InfoMessageComponent } from './shared/messaging/info-message.component';
import { ExceptionMessageComponent } from './shared/messaging/exception-message.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AuthenticationInterceptor } from './services/authentication.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TodoitemComponent,
    AddCatComponent,
    EditCatComponent,
    ShowCatComponent,
    AddTodoComponent,
    EditTodoComponent,
    ShowTodoComponent,
    LoginComponent,
    ValidationMessageComponent,
    InfoMessageComponent,
    ExceptionMessageComponent,
    HomeComponent,
    UsersComponent,
    ShowUsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddCatComponent,EditCatComponent]
})
export class AppModule { }
