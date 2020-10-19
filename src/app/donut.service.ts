import { analyzeNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Donut, DonutDetails, Donuts} from './donuts-interface'

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) { }

  getDonuts(){
    return this.http.get<Donuts>('https://grandcircusco.github.io/demo-apis/donuts.json');
  }

  getDonut(url:Donut){
    return this.http.get<DonutDetails>(url.ref);
  }
}
