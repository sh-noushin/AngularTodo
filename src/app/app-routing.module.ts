import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { LoginComponent } from './login/login.component';
import { ShowTodoComponent } from './todoitem/show-todo/show-todo.component';

const routes: Routes = [


  {
    path: 'categories',
    component: ShowCatComponent
  },
    
  {
    path: 'todos',
    component: ShowTodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
