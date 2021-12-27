import { Component, OnInit } from '@angular/core';

import { CurrencyServiceService } from '../currency-service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  buying:any;
  buy:any;

  constructor(private currencyService:CurrencyServiceService) { }

  ngOnInit(): void {
    this.buying=this.currencyService.buying;
    this.getCurrency();
  }
  getCurrency(){
    this.currencyService.getCurrency().subscribe(res=>{console.log(res);
      this.buy=res; this.buy=Array.of(this.buy);
    })
  }
  
}
