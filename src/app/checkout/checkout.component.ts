import { Component, OnInit, ElementRef,ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-checkout',
  host: {
        '(document:click)': 'handleClick($event)',
    },
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit {
	// https://github.com/leonardohjines/angular2-autocomplete
  ngOnInit() {
  }
  public query = '';
    public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                        "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                        "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo", "India","Indonesia","Iran","United States of America", "Pakistan", "China", "Bangladesh", "Srilanka", "Afghanistan",
                        "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                        "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                        "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","United Arab Emirates","Vatican City"];
    public filteredList = [];
    public elementRef;
 
    constructor(myElement: ElementRef, public ngxSmartModalService: NgxSmartModalService, private comp:AppComponent) {
        this.elementRef = myElement;
    }
    loadingBar = false;
    filter() {
    	this.loadingBar = true;
    	setTimeout(()=>{
    		this.loadingBar = false;
    		if (this.query !== ""){
		        this.filteredList = this.countries.filter(function(el){
		            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
		        }.bind(this));
		    }else{
		        this.filteredList = [];
		    }
    	}, 5000)
	}
	 
	select(item){
	    this.query = item;
	    this.filteredList = [];
	}
	handleClick(event){
	   var clickedComponent = event.target;
	   var inside = false;
	   do {
	       if (clickedComponent === this.elementRef.nativeElement) {
	           inside = true;
	       }
	      clickedComponent = clickedComponent.parentNode;
	   } while (clickedComponent);
	    if(!inside){
	        this.filteredList = [];
	    }
	}
	close(){
		this.comp.gotoshop();
	}

	isSubmitted = false;
 
	onSubmit({value, valid}){
		this.isSubmitted = true;
	}
}
