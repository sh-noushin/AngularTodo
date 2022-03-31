import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ShowTodoComponent } from './todoitem/show-todo/show-todo.component';

const routes: Routes = [


  {
    path: 'categories',
    component: ShowCatComponent,
    canActivate:[AuthGuard],
    data:{ claimType :' canAccessCategories'}
  },
    
  {
    path: 'todos',
    component: ShowTodoComponent,
    canActivate:[AuthGuard],
    data:{ claimType :' canAccessTodos'}
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    data:{ claimType :' canAccessHome'}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
