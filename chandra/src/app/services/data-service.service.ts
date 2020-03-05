import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private baseUrl: string, private http: HttpClient) { }

   post(resource) {
    return this.http.post(this.baseUrl, resource); 
  }
  getAll() {
    return this.http.get(this.baseUrl); 
  }
  getOne(id:string) {
    const url = `${this.baseUrl}/${id}`; 
    return this.http.get(url); 
  }
  update(resource) {
    return this.http.put(this.baseUrl + `/${resource._id}`, resource);
  }
  delete(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`)
     
  }

}
