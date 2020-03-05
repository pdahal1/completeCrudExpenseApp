import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countries: any;
  constructor(private quizservice: QuizService) { }

  ngOnInit() {
    this.quizservice.getAll().subscribe(data => {
      this.countries = data;
      console.log(this.countries); 
    })

  }

}
