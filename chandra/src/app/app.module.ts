import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HttpErrorInterceptor } from './common/http-error.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		AddExpenseComponent,
		EditExpenseComponent,
		ListExpenseComponent,
		LoginComponent,
		AuthComponent,
		DashboardComponent,
		DetailsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatTableModule ],
	providers: [
		ListExpenseComponent,
		AppComponent,
		{
			provide: HTTP_INTERCEPTORS,

			useClass: HttpErrorInterceptor,

			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
