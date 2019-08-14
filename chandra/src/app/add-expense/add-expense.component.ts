import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';

import { ListExpenseComponent } from '../list-expense/list-expense.component';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  
})
export class AddExpenseComponent implements OnInit {

  @Input() message : string;



  constructor(private formBuilder: FormBuilder, private router: Router, private expenseService: ExpenseService, private lec: ListExpenseComponent ) { }
  addForm: FormGroup; 
  


  onSubmit() {
    this.expenseService.postExpense(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-expense']);
    }); 
}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      catagory: ['', Validators.required],
      where: ['', Validators.required],
      amount: ['', Validators.required]
    }); 
  }

}
