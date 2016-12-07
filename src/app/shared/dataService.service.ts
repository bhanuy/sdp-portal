import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sharedData: any;

  saveData(str){
    this.sharedData = str;
  }

  getData(){
    return this.sharedData;
  }
}
