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
        // params.set('originplace', data.originplace);
        // params.set('destinationplace', data.destinationplace);
        // params.set('outbounddate', data.outbounddate);
        // params.set('inbounddate', data.inbounddate);
        // params.set('attractions', data.attractions);
        // params.set('budget', data.budget);
        // params.set('adult', data.adult);
        // params.set('children', data.children);
        // params.set('tfd', data.tfd);
        // params.set('tfp', data.tfp);
        // params.set('tft', data.tft);
        // params.set('thr', data.thr);
        // params.set('thp', data.thp);

        
        params.set('originplace', 'Helsinki');
        params.set('destinationplace', 'Paris');
        params.set('outbounddate', '2016-12-26');
        params.set('inbounddate', '2016-12-28');
        params.set('attractions', 'shop,bar');
        // params.set('budget', '');
        // params.set('adult', '');
        // params.set('children', '');
        params.set('tfd', data.tfd);
        params.set('tfp', data.tfp);
        params.set('tft', data.tft);
        params.set('thr', data.thr);
        params.set('thp', data.thp);

        
        console.log(params.set);
    // return this.http.get(this.baseURL + '/compute/vms')
    // return this.http.get('https://limitless-lowlands-64274.herokuapp.com/sdp?originplace=Helsinki&destinationplace=Paris&outbounddate=2016-12-26&inbounddate=2016-12-28&attractions=shop,bar&budget=3000&adult=2&children=2&tfd=min&tfp=min&tft=min&thr=max&thp=min')
    //             .map(this.extractData).catch(this.handleError);
    return this.http.get('https://limitless-lowlands-64274.herokuapp.com/sdp',{search: params})
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
