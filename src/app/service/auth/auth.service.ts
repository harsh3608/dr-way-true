import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000"

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`,data,{responseType:'json'});
  }

}
