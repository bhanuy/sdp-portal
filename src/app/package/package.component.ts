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
	products:any;
	product: any;
	showDetail: number;

	constructor(private dataService: DataService,private _location: Location) {
		this.products = this.dataService.getData();
    console.log('the products', this.products.results.length);
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
