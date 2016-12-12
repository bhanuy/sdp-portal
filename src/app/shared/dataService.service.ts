import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sharedData: any;
  sharedDays: number;

  saveData(str, days){
    this.sharedData = str;
    this.sharedDays = days;
  }

  getData(){
    return this.sharedData;
  }
  getDays(){
  	return this.sharedDays;
  }
}
