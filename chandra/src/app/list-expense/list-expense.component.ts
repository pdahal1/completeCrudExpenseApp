import { Component, OnInit, Input } from '@angular/core';

import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { Expense } from 'src/model/model.expense';
import {map} from 'rxjs/operators'
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
 
})
export class ListExpenseComponent implements OnInit {
  monthlyincome: number = 1834; 
  expenses: any; 
 
  constructor(public expenseService: ExpenseService, private router: Router, private appComponent:AppComponent) { }

  deleteExpense(expense: Expense): void{
    
      this.expenseService.delete(expense._id).subscribe(data => {
        this.expenses = this.expenses.filter(u => u !== expense);
      })
    
  }; 

  editExpense(expense: Expense): void{
    localStorage.removeItem("editUserId"); 
    localStorage.setItem("editUserId", expense._id.toString()); 
    this.router.navigate(['edit-expense']); 

  }; 

  addExpense(): void{
    this.router.navigate(['add-expense']); 
  };

  ngOnInit() {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
     }); 
   
  }

   getTotalCost() {
    return this.expenses.map(sum => sum.amount).reduce((acc, value) => acc + value, 0) ; 
   }
  
  remainingBalance() {
    return this.monthlyincome - this.getTotalCost(); 
  }

  

  


  
  
 
}
