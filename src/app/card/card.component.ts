import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css', '../css/material-design-iconic-font.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
	@Input() card:any;
  constructor(private comp:AppComponent) {  }
  addCart(id){
		this.comp.updateComponent(id);
	}
  ngOnInit() {

  }
}
