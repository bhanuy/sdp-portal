import { Component } from '@angular/core';

import { ApiService } from './shared';


@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://angular.io/docs/ts/latest/tutorial/';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
