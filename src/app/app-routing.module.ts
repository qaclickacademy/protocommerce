import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
// import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: AppComponent },
            { path: 'cart', component: CartComponent },
            // { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]) // , { enableTracing: true })
    ],
    providers: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }