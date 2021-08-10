import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTestService } from './add-test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css'],
})
export class AddTestComponent implements OnInit {
  public form: FormGroup;
  questions: [];
  startTime: number = new Date().getTime(); 
  public showData: boolean = true;
  duration = '00:00';
  milliseconds = 0;
  timer = null;
  constructor(
    private router:Router,
    private fb: FormBuilder,
    private _addTestService: AddTestService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({ uname: ['', Validators.required] });
    this._addTestService.getQuestions().subscribe((question:any)=>{
      
      question.forEach((q) => {
      this.form.addControl(q['_id'], this.fb.control(''));
    });
    this.questions = question 
    });
   
  }
  start() {
    this.showData = false;
    this.startTime = new Date().getTime();
    this.timer = setInterval(() => {
      this.milliseconds = new Date().getTime() - this.startTime;
      this.duration = this.millisToMinutesAndSeconds(
        this.milliseconds
      );
    });
  }
  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? '0' : '') + minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
  submit() { 
    // console.log(this.startTime,   this.duration);  \
  
    let data = this.form.value;
    data.duration = this.duration; 
    data.milliseconds = this.milliseconds;
    console.log(this.form.value.uname)
    this._addTestService.sendAnswer(data).subscribe(res=>{ 

    this.router.navigate([""])
    }) 
         clearInterval(this.timer); 
  }
}
