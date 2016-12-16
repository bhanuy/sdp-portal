import { Component } from '@angular/core';

@Component({
	selector: 'sdp-contact',
	templateUrl: './contact.component.html'
})

export class ContactComponent {
  private showRes: boolean = true;

  onSubmit(){
    this.showRes = false;
  }
}
