import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from 'src/app/model/company';
import { Coupon } from 'src/app/model/coupon';
import { CompanyService } from 'src/app/service/company.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public coupons: Coupon[];
  public companies: Company[];
  getAllcoup : boolean ;

  constructor(
    private title: Title,
    private dataService: DataService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
  this.title.setTitle('companyCoupons')
  }


  getAllCouponButten():void {

    this.getAllcoup=true;
   
  }



}