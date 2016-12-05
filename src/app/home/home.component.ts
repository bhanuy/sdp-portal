import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMultiSelectOption, IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ApiService } from '../shared/index'
import { DataService } from '../shared/index'
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',


})
export class HomeComponent  {

  public countries = [ 'New York City', 'Paris', 'London', 'Los Angeles',
  'Chicago',
  'Rome', 'San Francisco', ' Washington DC', 'Las Vegas', 'Miami', 'New Orleans',
  'Barcelona',
  'Australia', 'Austria', 'Buenos Aires', 'Amsterdam', 'Tokyo', 'Madrid', 'Boston',
  'Hong Kong',
  'Prague', 'Seattle', 'San Diego', 'Florence', 'Jamaica', 'Istanbul', 'Bangkok',
  'Sydney', 'Bali',
  'Houston', 'Singapore', 'Atlanta', 'Venice', 'Portland', 'Vienna', 'Orlando',
  'Dubai', 'Toronto', 'Austin', 'Hawaii', 'Dallas–Fort Worth', 'Shanghai', 'Budapest', 'Phoenix', 'Denver',
  'Dublin', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica',
  "Cote d'Ivoire", 'Milan', 'Rio de Janeiro', 'Munich', 'Beijing', 'Mexico City', 'San Antonio', 'Montreal',
  'Melbourne', 'Vancouver',
  'Cape Town', 'Lisbon', 'Edinburgh', 'Marrakech', 'Baltimore', 'Moscow', 'Phuket', 'Athens',
  'Brussels', 'Nashville',
  'Stockholm', 'Kuala Lumpur', 'Santa Fe', 'Hanoi', 'Copenhagen', 'Santiago', 'Hamburg',
  'Jerusalem', 'Mumbai',
  'Naples', 'Seoul', 'Frankfurt', 'New Delhi', 'Ho Chi Minh City', 'Key West', 'St. Petersburg', 'Charleston',
  'Krakow', 'Lima', 'Chiang Mai', 'Tucson',
  'San Juan', 'Cancun', 'Koh Samui', 'Cairo', 'Salzburg', 'Seville', 'Zurich', 'British Virgin Islands',
  'Sao Paulo', 'Puerto Vallarta', 'Trinidad and Tobago', 'Brisbane', 'Salt Lake City', 'Havana'];
  public departureList = [];
  public destinationList = [];
  private packageData = {
    originplace : '',
    destinationplace: '',
    outbounddate: '',
    inbounddate: '',
    attractions: '',
    budget: '',
    adult: '',
    children: '',
    tfd: 'min',
    tfp: 'min',
    thr: 'min',
    thp: 'min',
  }

  public error = {
    validation: true,
    outbounddate:0,
    inbounddate:0,
    msg: ''
  }

  private myDatePickerNormalOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd mm yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    showCurrentDay: true,
    height: '34px',
    width: '260px',
    markCurrentDay: true,
    selectionTxtFontSize: '18px',
    alignSelectorRight: false,
    indicateInvalidDate: true,
    showDateFormatPlaceholder: true,
    editableMonthAndYear: true,
    minYear: 1900,
    componentDisabled: false,
    disableUntil: {year: 0, month: 0, day: 0}
  };

  private border: string = 'none';
  private selectedOptions: number[];
  private package: any[] = [];
  private formDisabled : boolean = true;
  private myOptions: IMultiSelectOption[] = [
  { id: 1, name: 'Amusement Park' },
  { id: 2, name: 'Art Gallery' },
  { id: 3, name: 'Park' },
  { id: 4, name: 'Cafe' },
  { id: 5, name: 'Casino' },
  { id: 6, name: 'Church' },
  { id: 7, name: 'Hindu Temple' },
  { id: 8, name: 'Mosque' },
  { id: 9, name: 'Movie' },
  { id: 10, name: 'Museum' },
  { id: 11, name: 'Night Club' },
  { id: 12, name: 'Restaurant' },
  { id: 13, name: 'Shopping Mall' },
  { id: 14, name: 'Travel Agency' },
  { id: 15, name: 'Zoo' },

  ];

  private myTexts: IMultiSelectTexts = {
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Search...',
    defaultTitle: 'Select Attraction',
  };
  constructor(
    private apiService : ApiService,
    private dataService: DataService,
    private router: Router,
    private ActiveRoute: ActivatedRoute) {
    let date = new Date();
    this.myDatePickerNormalOptions.disableUntil = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() -1}
  }



  onDateChanged(event:any, arg2) {
    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    if(arg2 === 'dept') {
      this.packageData.outbounddate = event.formatted;
      this.error.outbounddate = event.epoc;
    }else {
      this.packageData.inbounddate = event.formatted;
      this.error.inbounddate = event.epoc;
    }

  }

  filter(arg, arg2) {
    var featuredList = [];
    if (arg.length > 1) {
      featuredList = this.countries.filter(function(el){
        return el.toLowerCase().indexOf(arg.toLowerCase()) > -1;
      }.bind(this));
    }else {
      featuredList = [];
    }

    if(arg2 == 'dept') {
      this.departureList = featuredList;
    }else {
      this.destinationList = featuredList
    }
  }

  select(item, arg2) {
    if(arg2 == 'dept') {
      this.packageData.originplace = item;
      this.departureList = [];
    }else {
      this.packageData.destinationplace = item;
      this.destinationList = [];
    }

  }

  onChange(e){
    console.log(e)
  }

  onSubmit() {

   if(!this.packageData.originplace || !this.packageData.destinationplace
     || !this.packageData.outbounddate || !this.packageData.inbounddate){
     console.log('empty');
     this.error.validation = false;
     this.error.msg = "Please fill mandatory field(*)."
   }else if(this.packageData.originplace == this.packageData.destinationplace){
      console.log('noclean');
      this.error.validation = false;
      this.error.msg = "Destination and departure cannot be same."
   }else if(this.error.inbounddate < this.error.outbounddate){
      this.error.validation = false;
      this.error.msg = "Inbound date cant be earlier than outbounddate."
   }else{
     this.error.validation = true;
     console.log('form submitted');
    this.apiService.getResult().subscribe(
      data =>{
        console.log(data);
        this.package = data;
        this.dataService.saveData(data);
      },
      error => console.log(error),
      () => this.router.navigate(['/package-list'])
      );

   }
  }

}
