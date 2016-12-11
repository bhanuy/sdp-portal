import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PackageComponent } from './package/package.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { PageNotFoundComponent } from './common/404error.component';
import { ApiService, DataService } from './shared';
import { routing } from './app.routing';
import { MyDatePickerModule } from 'mydatepicker';
import {MultiselectDropdownModule} from './common/multi-dropdown';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    MyDatePickerModule,
    MultiselectDropdownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0ImSbUGhJPw5trT2PriH6idwYEGrEsjU'
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PackageComponent,
    PageNotFoundComponent,
    ContactComponent
  ],
  providers: [
    ApiService,
    DataService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}

