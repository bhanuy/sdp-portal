import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sharedData: any;
  sharedDays: number;
  sharedPassenger: number;

  saveData(str, days, passenger){
    this.sharedData = str;
    this.sharedDays = days;
    this.sharedPassenger = passenger;
  }

  getData(){
    return this.sharedData;
  }
  getDays(){
  	return this.sharedDays;
  }
  getPassenger() {
    return this.sharedPassenger;
  }
}
