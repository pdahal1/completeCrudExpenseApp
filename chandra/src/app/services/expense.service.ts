import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends DataServiceService {
 
  constructor(http: HttpClient) { 
    super('http://localhost:3001/expenses', http); 
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { Expense } from 'src/model/model.expense';



// @Injectable({
//   providedIn: 'root'
// })
// export class ExpenseService {
//   expenses: any;

//   private content = new BehaviorSubject<string>("Default data")
//   public share = this.content.asObservable(); 

//   readonly baseUrl = 'http://localhost:3001/expenses'; 
//   constructor(private http: HttpClient) { }

  
//   postExpense(exp: Expense) {
//     return this.http.post(this.baseUrl, exp); 
//   }
//   getExpenses() {
//     return this.http.get(this.baseUrl); 
//   }
//   getExpense(id:string) {
//     const url = `${this.baseUrl}/${id}`; 
//     return this.http.get(url); 
//   }
//   putExpense(exp: Expense) {
//     return this.http.put(this.baseUrl + `/${exp._id}`, exp);
//   }
//   deleteExpense(_id: string) {
//     return this.http.delete(this.baseUrl + `/${_id}`)
     
//   }
 
//   login(loginPayload): Observable<Expense>{
//     return this.http.post<Expense>('http:localhost:3000/' + 'token/generate-token', loginPayload)
//   }

//   updateData(text) {
//     this.content.next(text); 
//   }

 
  

  

// }
