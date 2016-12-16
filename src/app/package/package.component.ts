import { Component } from '@angular/core';
import { DataService } from '../shared/index'
import { Location} from '@angular/common';


@Component({
	selector: 'my-package',
	templateUrl: './package.component.html'
})

export class PackageComponent {
	title: string = 'My first angular2-google-maps project';
	lat: number;
	lng: number;
	products:any = {}
	product: any;
	showDetail: number;
	totalDay: number;
	totalPassenger: number;

	constructor(private dataService: DataService,private _location: Location) {
		this.products = this.dataService.getData();
		console.log(this.products);
		this.totalDay = this.dataService.getDays() /86400;
		this.totalPassenger = Math.round(this.dataService.getPassenger()/2);
		console.log(this.totalPassenger);


	}

	productDetail(item,i) {
		this.product = item;
		this.showDetail = i;
		this.lat = Number(this.product.hotel.latitude);
		this.lng = Number(this.product.hotel.longitude);
		console.log(this.lat, this.lng);
	}

	productBrief() {
		this.showDetail = this.products.length + 1;
	}

	backClicked() {
		this._location.back();
	}
}
