import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  //http module inisilization
  constructor(private http: HttpClient) {}

  /* Get API
   * /test routes
   * desc: Get all past Test
   */

  getPastTest() {
    return this.http.get('http://localhost:3000/tests');
  }
}
