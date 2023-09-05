import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000";

  getDoctor(data:any) {
    return this.http.post(`${this.baseUrl}/guest`,data,{responseType:'json'});
  }

}
