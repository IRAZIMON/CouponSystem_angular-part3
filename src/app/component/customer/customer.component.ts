import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  getAllCoupCus: boolean;
  constructor( private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('customerCoupons')
  }
  customerList(): void {
    this.getAllCoupCus=true;
  }
}



