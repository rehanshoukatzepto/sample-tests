import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as moment from 'moment';
// test interface
export interface PastTest {
  studentName: string;
  duration: string;
  createdAt: Date;
  percentage: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _dashboardService: DashboardService) {}
  // table columns define
  displayedColumns: string[] = [
    '#',
    'studentName',
    'duration',
    'createdAt',
    'percentage',
  ];
  averageScore: number = 0.0;
  averageTime: string = '';
  //data table state initilization
  dataSource = [];
  ngOnInit(): void {
    // get past test record
    this._dashboardService.getPastTest().subscribe((test: any) => {
      this.dataSource = test;
      let scoreSum = 0;
      let durationSum = 0;

      // calculate avarage time and duration
      test.forEach((t) => {
        scoreSum += parseFloat(t.percentage); 
        durationSum += parseFloat(t.duration);  
         t.duration = this.converstMinSec(t.duration)
      });  
      this.averageScore = scoreSum / test.length;   
        this.averageTime  = this.converstMinSec(durationSum/test.length)
    });
  }
 
  converstMinSec(duration){
    let minutes =  moment.duration(duration).minutes();
    let seconds = moment.duration(duration).seconds();
    return (minutes < 10 ? '0' : '') + minutes + ':' + ( seconds  < 10 ? '0' : '') + seconds
  }
}
