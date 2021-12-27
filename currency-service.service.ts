import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';



@Injectable({providedIn:'root'})
export class CurrencyServiceService {

  buying:any='';

  apiURI:string='https://blockchain.info/ticker?cors=true';

  constructor(private http:HttpClient) { }

  getCurrency(){
    return this.http.get('https://blockchain.info/ticker?cors=true');
  }
}
