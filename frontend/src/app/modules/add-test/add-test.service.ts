import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AddTestService {
  //inisilized http module
  constructor(private http: HttpClient) {}
  /* POST API
   * /test routes
   * desc: send answer and user detail to save data
   */
  sendAnswer(ans) {
    let question = ans;
    console.log(moment.duration(ans.milliseconds));
    let data = {
      studentName: ans.uname,
      duration: ans.milliseconds,
      questions: question,
    };
    return this.http.post('http://localhost:3000/tests', data);
  }
  /* Get API
   * /questions routes
   * desc: Get all Test question
   */
  getQuestions() {
    return this.http.get('http://localhost:3000/questions');
  }
}
