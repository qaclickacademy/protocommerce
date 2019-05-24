import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css', '../css/material-design-iconic-font.css']
})
export class CardListComponent implements OnInit {
	@Input() cards: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
