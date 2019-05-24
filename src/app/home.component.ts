import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css', './css/material-design-iconic-font.css']

})

export class HomeComponent {
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