import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends DataServiceService {

  constructor(http: HttpClient) {
    super('https://restcountries.eu/rest/v2/all',http)
   }
}
