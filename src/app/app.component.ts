import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 
  '../../node_modules/bootstrap/dist/css/bootstrap.css', 
  './css/material-design-iconic-font.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	public cards: Array<any> = [
    {
  		"name": "iphone X",
  		"price": 100000,
  		"id": 1,
      "img": 'assets/img/iphonex.jpg'
  	},
  	{
  		"name": "Samsung Note 8",
  		"price": 85000,
  		"id": 2,
      "img": 'assets/img/samsung.jpg'
  	},
  	{
  		"name": "Nokia Edge",
  		"price": 65000,
  		"id": 3,
      "img": 'assets/img/nokia.jpg'
  	},
  	{
  		"name": "Blackberry",
  		"price": 50000,
  		"id": 4,
      "img": 'assets/img/blackberry.jpg'
  	}
  ];
  cartDetails = [];
  cartList = [];
  // cartList.forEach(function(val){
  //   val.quantity = 0;
  // });
  flag = true;
  arr = [];
  showCheckout = false;
  updateComponent(value)
  {
    this.cartDetails.push(value.card);
    this.arr = this.cartList.filter(function(val){
      return (val.id == value.card.id);
    });
    if(this.arr.length){
      this.cartList.forEach(function(val , flag){
        if(val.id == value.card.id){
          val.quantity = val.quantity+1;
        }
      });
    } else {
      value.card.quantity = 1;
      this.cartList.push(value.card);
    }
  }

  title = 'app';
  productPrice = 0;
  showCart = false;
  gotoCart(){
    this.showCart = !this.showCart;
    this.updateTotalAmount();
  }
  updateTotalAmount(){
    this.productPrice = 0;
    this.cartList.map(function(val){
      this.productPrice += (val.quantity * val.price);
    },this);
  }

  removeItem(item){
    this.cartList = this.cartList.filter(function(val){
      return (val.id !== item);
    });
    this.cartDetails = this.cartDetails.filter(function(val){
      return (val.id !== item);
    });
    this.updateTotalAmount();
  }

  updateQuantity(value, id) {
    if(value!=""){
      this.cartList = this.cartList.map(function(val){
        if(val.id == id){
          val.quantity = value;
        }
        return val;
      });
      this.updateTotalAmount();
    }
  }
  
  emptyCart(){
    this.cartDetails = [];
    this.cartList = [];
    this.productPrice = 0;
    this.gotoCart();
  }

  gotoshop(){
    this.cartDetails = [];
    this.cartList = [];
    this.showCart = true;
    this.gotoCart();
  }
  

  arrangeCartItems(){
     // cartDetails
  }

  ngOnInit() {
  }

  
  checkout(){
    this.showCart = false;
    this.showCheckout = true;
  }
}
