import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CartComponent } from './cart/cart.component';
// import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './form.component';
import { NavbarComponent } from './navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes, Router } from '@angular/router';

import { NgxSmartModalModule } from 'ngx-smart-modal';

const appRoutes: Routes = [
  { path: '', component:FormComponent },
  { path: 'shop', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CartComponent,
    HomeComponent,
    NavbarComponent,
    FormComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxSmartModalModule.forRoot()
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
