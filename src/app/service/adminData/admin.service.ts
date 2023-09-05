import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000"

  create(data: any) {
    return this.http.post(`${this.baseUrl}/post`,data);
  }

  read() {
    return this.http.get(this.baseUrl);
  }

  update(data:any) {
    return this.http.put(`${this.baseUrl}/update`,data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
