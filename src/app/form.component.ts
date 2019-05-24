import { Component,ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'form-comp',
    templateUrl: './form.component.html',
    styleUrls: ['./app.component.css', 
    './form.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.css', 
    './css/material-design-iconic-font.css'],
    encapsulation: ViewEncapsulation.None

})

export class FormComponent {
    user = {
        name:'',
        email:'',
        phone:''
    }

    isSubmitted = false;
 
    onSubmit({value, valid}){
        this.isSubmitted = true;
    }
}