import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; 
  submitted: boolean = false; 
  invalidLogin: boolean = false; 
  text = ''; 

  constructor(private formBuilder: FormBuilder, private router: Router, ){}

  onSubmit() {
    this.submitted = true; 
    if (this.loginForm.invalid) {
      return; 
    }
    if (this.loginForm.controls.email.value == 'param' && this.loginForm.controls.password.value == 'param') {
      this.router.navigate(['list-expense']); 
    } else {
      this.invalidLogin=true; 
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], 
      password: ['', Validators.required]
   }); 
  }

}
