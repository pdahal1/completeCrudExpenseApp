import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { Router, ActivatedRoute } from '@angular/router';
import {first} from "rxjs/operators";
import { Expense } from 'src/model/model.expense';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  expense: Expense; 
  editForm: FormGroup; 
 
    
  

  constructor(private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }
  
  onSubmit() {
    this.expenseService.update(this.editForm.value)
      .pipe(first()).subscribe(data => {
        this.router.navigate(['list']);
      },
        error => {
          alert("Error in updating the Expense");
        }
      ); 
  }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId"); 
    if (!userId) {
      alert("invalid action")
      this.router.navigate(['list-expense']); 
      return; 
    }
    this.editForm = this.formBuilder.group({
      _id: [], 
      date:['', Validators.required],
      catagory: ['', Validators.required],
      where: ['', Validators.required],
      amount: ['', Validators.required]
    }); 
    this.expenseService.getOne(userId).subscribe(data => {
      this.editForm.setValue(data);
    }); 
  }

}
