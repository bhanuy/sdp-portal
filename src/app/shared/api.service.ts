import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams }     from '@angular/http';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class ApiService {

   constructor(private http:Http){
       this.http = http;
   }

     getResult(data: any): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('originplace', data.originplace);
        params.set('destinationplace', data.destinationplace);
        params.set('outbounddate', data.outbounddate);
        params.set('inbounddate', data.inbounddate);
        params.set('attractions', data.attractions);
        params.set('budget', data.budget);
        params.set('adult', data.adult);
        params.set('children', data.children);
        params.set('tfd', data.tfd);
        params.set('tfp', data.tfp);
        params.set('tft', data.tft);
        params.set('thr', data.thr);
        params.set('thp', data.thp);

    return this.http.get('https://sdp-travel.herokuapp.com/sdp',{search: params})
                .map(this.extractData).catch(this.handleError);
  }
public extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    public handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
