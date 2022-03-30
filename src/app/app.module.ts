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
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthinterceptorService } from './services/authinterceptor.service';
import { LoginComponent } from './login/login.component';
import { ValidationMessageComponent } from './shared/messaging/validation-message.component';
import { InfoMessageComponent } from './shared/messaging/info-message.component';
import { ExceptionMessageComponent } from './shared/messaging/exception-message.component';


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
    AuthComponent,
    LoginComponent,
    ValidationMessageComponent,
    InfoMessageComponent,
    ExceptionMessageComponent
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
      useClass: AuthinterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddCatComponent,EditCatComponent]
})
export class AppModule { }
