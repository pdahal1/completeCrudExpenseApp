import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { AuthComponent } from './auth/auth.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';




const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'login', component: LoginComponent }, 
  { path: 'add-expense', component: AddExpenseComponent }, 
  { path: 'list', component: ListExpenseComponent },
  { path: 'edit-expense', component: EditExpenseComponent }, 
  { path: 'auth', component: AuthComponent }, 
 
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'details', component:DetailsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
