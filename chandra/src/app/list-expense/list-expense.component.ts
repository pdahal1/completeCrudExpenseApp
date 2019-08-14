import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';
import { Expense } from 'src/model/model.expense';


@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  
  expenses: any; 
  kk: any; 
  
  constructor(public expenseService: ExpenseService, private router: Router, ) { }

  deleteExpense(expense: Expense): void{
    
      this.expenseService.deleteExpense(expense._id).subscribe(data => {
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
  }
 
  ngOnInit() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
     
    }); 

   
   
  }

  getTotalCost() {
    return this.expenses.map(sum => sum.amount).reduce((a: any, b: any) => a + b); 
  }
  
  
 
}
